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
    if (!process.env.INFINITEPAY_API_KEY) {
      return res.status(500).json({ success: false, message: "Configuração ausente: INFINITEPAY_API_KEY" });
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
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }
    if (!response.ok) {
      return res.status(400).json({
        success: false,
        message: "Falha ao gerar checkout",
        code: response.status,
        details: data,
      });
    }
    const url = data?.url ?? null;
    if (!url) {
      return res.status(400).json({
        success: false,
        message: "checkout_url ausente na resposta",
        details: data,
      });
    }
    return res.status(200).json({
      orderId: order_nsu,
      checkout_url: url,
    });
  } catch {
    return res.status(400).json({ success: false, message: "Erro interno" });
  }
}
