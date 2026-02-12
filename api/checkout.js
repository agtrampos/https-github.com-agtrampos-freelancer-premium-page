import crypto from "node:crypto";
import { redis } from "../lib/redis.js";
const INFINITEPAY_API_KEY = process.env.INFINITEPAY_API_KEY;
if (!INFINITEPAY_API_KEY) {
  console.error("INFINITEPAY_API_KEY não encontrada.");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }
  try {
    const { email } = req.body || {};
    if (!email) {
      return res.status(400).json({ success: false, message: "Email obrigatório" });
    }
    if (!INFINITEPAY_API_KEY) {
      return res.status(500).json({ success: false, message: "Configuração ausente: INFINITEPAY_API_KEY" });
    }
    const order_nsu = crypto.randomUUID();
    await redis.set(`order:${order_nsu}`, {
      email,
      status: "PENDING",
      created_at: new Date().toISOString(),
    });
    try {
      console.log("InfinitePay token length:", String(INFINITEPAY_API_KEY).length);
    } catch {}
    const response = await fetch("https://api.infinitepay.io/invoices/public/checkout/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${INFINITEPAY_API_KEY}`,
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
    const checkout_url = data?.url ?? data?.checkout_url ?? null;
    if (!checkout_url) {
      return res.status(400).json({
        success: false,
        message: "checkout_url ausente na resposta",
        details: data,
      });
    }
    return res.status(200).json({
      success: true,
      orderId: order_nsu,
      checkout_url,
    });
  } catch {
    return res.status(400).json({ success: false, message: "Erro interno" });
  }
}
