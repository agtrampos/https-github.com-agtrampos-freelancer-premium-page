import type { VercelRequest, VercelResponse } from "@vercel/node";
import { validateWebhookSignature, processWebhookPayload } from "../../../server/infinitepay";
import { getPaymentByInfinitepayId, updatePaymentStatus, updateSubscriptionStatus } from "../../../server/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const rawBody = JSON.stringify(req.body ?? {});
    const signature = req.headers["x-infinitepay-signature"] as string | undefined;

    if (!signature || !validateWebhookSignature(rawBody, signature)) {
      res.status(401).json({ error: "Invalid signature" });
      return;
    }

    const payload = processWebhookPayload(req.body as any);
    const payment = await getPaymentByInfinitepayId(payload.infinitepayId);

    if (!payment) {
      res.status(404).json({ error: "Payment not found" });
      return;
    }

    await updatePaymentStatus(payment.id, payload.status, payload.infinitepayId);

    if (payload.status === "completed" && payment.subscriptionId) {
      await updateSubscriptionStatus(payment.subscriptionId, "active");
    }

    if (payload.status === "failed" && payment.subscriptionId) {
      await updateSubscriptionStatus(payment.subscriptionId, "cancelled");
    }

    res.status(200).json({
      success: true,
      paymentId: payment.id,
      status: payload.status,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
