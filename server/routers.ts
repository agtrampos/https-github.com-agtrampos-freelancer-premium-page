import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createCheckoutLink } from "./infinitepay";
import {
  createSubscription,
  getActiveSubscription,
  updateSubscriptionStatus,
  createPayment,
  updatePaymentStatus,
  getPaymentByInfinitepayId,
  getUserPayments,
  createOrUpdateEmailLead,
  getEmailLead,
} from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  /**
   * Payment Router - Gerencia pagamentos e assinaturas
   */
  payment: router({
    /**
     * Gera link de checkout para InfinitePay
     */
    createCheckout: protectedProcedure
      .input(
        z.object({
          planType: z.string().default("premium"),
          amount: z.number().positive(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        try {
          if (!ctx.user?.email) {
            throw new Error("User email not found");
          }

          // Criar checkout link
          const checkout = await createCheckoutLink({
            userId: ctx.user.id,
            email: ctx.user.email,
            amount: input.amount,
            planType: input.planType,
          });

          // Criar registro de pagamento pendente
          const expiryDate = new Date();
          expiryDate.setMonth(expiryDate.getMonth() + 3); // 3 meses

          const subscription = await createSubscription({
            userId: ctx.user.id,
            status: "pending",
            startDate: new Date(),
            expiryDate,
            planType: input.planType,
            price: input.amount,
            currency: "BRL",
          });

          const payment = await createPayment({
            userId: ctx.user.id,
            subscriptionId: (subscription as any).insertId,
            amount: input.amount,
            currency: "BRL",
            status: "pending",
            description: `Subscription - ${input.planType}`,
          });

          return {
            checkoutUrl: checkout.checkoutUrl,
            checkoutId: checkout.checkoutId,
            externalId: checkout.externalId,
            paymentId: (payment as any).insertId,
          };
        } catch (error) {
          console.error("[Payment] Error creating checkout:", error);
          throw new Error("Failed to create checkout");
        }
      }),

    /**
     * Obtém status da assinatura ativa do usuário
     */
    getActiveSubscription: protectedProcedure.query(async ({ ctx }) => {
      const subscription = await getActiveSubscription(ctx.user!.id);
      return subscription;
    }),

    /**
     * Obtém histórico de pagamentos do usuário
     */
    getPaymentHistory: protectedProcedure.query(async ({ ctx }) => {
      const payments = await getUserPayments(ctx.user!.id);
      return payments;
    }),
  }),

  /**
   * Email Router - Gerencia leads e emails
   */
  email: router({
    /**
     * Captura email da landing page
     */
    captureLead: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const lead = await createOrUpdateEmailLead({
            email: input.email,
            status: "new",
            source: "landing",
          });

          return {
            success: true,
            message: "Email capturado com sucesso",
            lead,
          };
        } catch (error) {
          console.error("[Email] Error capturing lead:", error);
          throw new Error("Failed to capture email");
        }
      }),

    /**
     * Obtém informações de um lead por email
     */
    getLead: publicProcedure
      .input(z.object({ email: z.string().email() }))
      .query(async ({ input }) => {
        const lead = await getEmailLead(input.email);
        return lead;
      }),
  }),

  /**
   * Webhook Router - Recebe eventos da InfinitePay
   */
  webhook: router({
    /**
     * Webhook de confirmação de pagamento (InfinitePay)
     * Nota: Este endpoint deve ser chamado diretamente via HTTP POST
     * não através do cliente tRPC
     */
    infinitepayConfirm: publicProcedure
      .input(
        z.object({
          id: z.string(),
          status: z.string(),
          amount: z.number(),
          externalId: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Buscar pagamento existente
          const payment = await getPaymentByInfinitepayId(input.id);

          if (!payment) {
            console.warn("[Webhook] Payment not found:", input.id);
            return { success: false, message: "Payment not found" };
          }

          // Mapear status
          const statusMap: Record<string, string> = {
            approved: "completed",
            completed: "completed",
            paid: "completed",
            declined: "failed",
            failed: "failed",
            pending: "pending",
          };

          const newStatus = statusMap[input.status] || "pending";

          // Atualizar pagamento
          await updatePaymentStatus(payment.id, newStatus, input.id);

          // Se pagamento completado, atualizar subscription
          if (newStatus === "completed" && payment.subscriptionId) {
            await updateSubscriptionStatus(payment.subscriptionId, "active");
          }

          return {
            success: true,
            message: "Payment confirmed",
            paymentId: payment.id,
          };
        } catch (error) {
          console.error("[Webhook] Error processing payment:", error);
          throw new Error("Failed to process webhook");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
