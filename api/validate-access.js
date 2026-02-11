const store = globalThis.__FLM_STORE || (globalThis.__FLM_STORE = new Map());

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ success: false, message: "Método inválido" });
  }
  try {
    const { email } = req.body || {};
    if (!email) {
      return res.status(400).json({ success: false, message: "Email obrigatório" });
    }
    const order = Array.from(store.values()).find((o) => o?.email === email);
    if (!order) {
      return res.status(400).json({ success: false, message: "Assinatura não encontrada" });
    }
    const now = new Date();
    const due = new Date(order.subscription_next_due);
    if (order.status === "ACTIVE" && due >= now) {
      return res.status(200).json({ success: true, message: null });
    }
    return res.status(400).json({
      success: false,
      message: "Assinatura vencida ou inativa",
    });
  } catch {
    return res.status(400).json({ success: false, message: "Erro interno" });
  }
}
