import { Redis } from "@upstash/redis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ success: true, message: null });
  }
  try {
    const body = req.body;
    console.log("WEBHOOK RECEBIDO:", body);

    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) {
      return res.status(200).json({ success: true, message: null });
    }
    const redis = new Redis({ url, token });

    const orderId = body?.order_nsu;
    const status = (body?.status || "").toLowerCase();

    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: "Pedido não encontrado",
      });
    }

    const order = await redis.get(`order:${orderId}`);
    if (!order) {
      return res.status(400).json({
        success: false,
        message: "Pedido não encontrado",
      });
    }

    if (status === "paid" || body?.paid === true) {
      const now = new Date();
      const nextDue = new Date();
      nextDue.setMonth(nextDue.getMonth() + 1);

      await redis.set(`subscription:${order.email}`, {
        status: "ACTIVE",
        subscription_start: now.toISOString(),
        subscription_next_due: nextDue.toISOString(),
        last_payment_date: now.toISOString(),
      });

      await redis.set(`order:${orderId}`, {
        ...order,
        status: "PAID",
      });
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
