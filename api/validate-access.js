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
    const subscription = await redis.get(`subscription:${email}`);
    if (!subscription) {
      return res.status(400).json({
        success: false,
        message: "Assinatura não encontrada",
      });
    }
    const now = new Date();
    const due = new Date(subscription.subscription_next_due);
    if (subscription.status === "ACTIVE" && due >= now) {
      return res.status(200).json({ success: true, message: null });
    }
    return res.status(400).json({ success: false, message: "Assinatura vencida" });
  } catch {
    return res.status(400).json({ success: false, message: "Erro interno" });
  }
}
