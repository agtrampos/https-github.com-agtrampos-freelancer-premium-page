/**
 * Webhook Handlers
 * 
 * Endpoints HTTP para receber webhooks de serviços externos
 * - InfinitePay: Confirmação de pagamentos
 */

import { Express, Request, Response } from 'express';
import { validateWebhookSignature, processWebhookPayload, extractUserIdFromExternalId } from './infinitepay';
import {
  getPaymentByInfinitepayId,
  updatePaymentStatus,
  updateSubscriptionStatus,
} from './db';

/**
 * Registra rotas de webhook no Express
 */
export function registerWebhooks(app: Express) {
  /**
   * POST /api/webhooks/infinitepay
   * Recebe eventos de pagamento da InfinitePay
   */
  app.post('/api/webhooks/infinitepay', async (req: Request, res: Response) => {
    try {
      // Validar assinatura do webhook
      const rawBody = JSON.stringify(req.body);
      const signature = req.headers['x-infinitepay-signature'] as string;

      if (!signature || !validateWebhookSignature(rawBody, signature)) {
        console.warn('[Webhook] Invalid signature');
        return res.status(401).json({ error: 'Invalid signature' });
      }

      // Processar payload
      const payload = processWebhookPayload(req.body);

      // Buscar pagamento existente
      const payment = await getPaymentByInfinitepayId(payload.infinitepayId);

      if (!payment) {
        console.warn('[Webhook] Payment not found:', payload.infinitepayId);
        return res.status(404).json({ error: 'Payment not found' });
      }

      // Atualizar status do pagamento
      await updatePaymentStatus(payment.id, payload.status, payload.infinitepayId);

      // Se pagamento completado, ativar subscription
      if (payload.status === 'completed' && payment.subscriptionId) {
        await updateSubscriptionStatus(payment.subscriptionId, 'active');
        console.log('[Webhook] Subscription activated:', payment.subscriptionId);
      }

      // Se pagamento falhou, cancelar subscription
      if (payload.status === 'failed' && payment.subscriptionId) {
        await updateSubscriptionStatus(payment.subscriptionId, 'cancelled');
        console.log('[Webhook] Subscription cancelled:', payment.subscriptionId);
      }

      // Responder com sucesso
      res.status(200).json({
        success: true,
        paymentId: payment.id,
        status: payload.status,
      });

      console.log('[Webhook] Payment processed:', {
        paymentId: payment.id,
        status: payload.status,
        amount: payload.amount,
      });
    } catch (error) {
      console.error('[Webhook] Error processing InfinitePay webhook:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  /**
   * GET /api/webhooks/health
   * Health check para webhooks
   */
  app.get('/api/webhooks/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });
}
