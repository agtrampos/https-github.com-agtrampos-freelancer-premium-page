import { Redis } from "@upstash/redis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ success: true, message: null });
  }
  try {
    const body = req.body;
    console.log("WEBHOOK RECEBIDO:", { keys: Object.keys(body || {}) });

    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) {
      return res.status(200).json({ success: true, message: null });
    }
    const redis = new Redis({ url, token });

    const orderId = body?.order_nsu;
    const status = (body?.status || "").toLowerCase();
    const emailFromPayload =
      body?.customer?.email ||
      body?.buyer?.email ||
      body?.payer?.email ||
      body?.payment?.customer?.email ||
      null;

    let order = null;
    if (orderId) {
      order = await redis.get(`order:${orderId}`);
    }

    if (status === "paid" || body?.paid === true) {
      const now = new Date();
      const nextDue = new Date();
      nextDue.setMonth(nextDue.getMonth() + 1);

      const targetEmail = order?.email || emailFromPayload;
      if (!targetEmail) {
        return res.status(400).json({
          success: false,
          message: "Email não encontrado no webhook",
        });
      }

      await redis.set(`subscription:${targetEmail}`, {
        status: "ACTIVE",
        subscription_start: now.toISOString(),
        subscription_next_due: nextDue.toISOString(),
        last_payment_date: now.toISOString(),
      });

      if (orderId && order) {
        await redis.set(`order:${orderId}`, {
          ...order,
          status: "PAID",
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: "Erro interno",
    });
  }
}
