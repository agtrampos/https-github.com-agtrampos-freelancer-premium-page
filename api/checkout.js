import crypto from "node:crypto";
import { redis } from "../lib/redis.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ success: false, message: "Método inválido" });
  }
  try {
    const { email } = req.body || {};
    if (!email) {
      return res.status(400).json({ success: false, message: "Email obrigatório" });
    }
    const order_nsu = crypto.randomUUID();
    await redis.set(`order:${order_nsu}`, {
      email,
      status: "PENDING",
      created_at: new Date().toISOString(),
    });
    const response = await fetch("https://api.infinitepay.io/invoices/public/checkout/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.INFINITEPAY_API_KEY}`,
      },
      body: JSON.stringify({
        handle: "tramposshop",
        order_nsu,
        redirect_url: "https://freelancerpremium.vercel.app/",
        webhook_url: "https://freelancerpremium.vercel.app/api/webhooks/infinitepay",
        items: [
          {
            quantity: 1,
            price: 990,
            description: "FREELANCEPREMIUM",
          },
        ],
        customer: { email },
      }),
    });
    const data = await response.json();
    return res.status(200).json({
      orderId: order_nsu,
      checkout_url: data?.url ?? null,
    });
  } catch {
    return res.status(400).json({ success: false, message: "Erro interno" });
  }
}
