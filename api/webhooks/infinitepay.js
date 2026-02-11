const store = globalThis.__FLM_STORE || (globalThis.__FLM_STORE = new Map());

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({
      success: false,
      message: "Método inválido",
    });
  }

  try {
    let body = req.body;
    if (!body) {
      try {
        const chunks = [];
        for await (const chunk of req) {
          chunks.push(chunk);
        }
        const raw = Buffer.concat(chunks).toString("utf-8");
        body = raw ? JSON.parse(raw) : {};
      } catch {
        return res.status(400).json({
          success: false,
          message: "Payload inválido",
        });
      }
    }

    const orderId = body?.order_nsu || body?.orderId || body?.reference || null;
    const status = (body?.status || "").toLowerCase();

    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: "Pedido não encontrado",
      });
    }

    const order = store.get(orderId);
    if (!order) {
      return res.status(400).json({
        success: false,
        message: "Pedido não encontrado",
      });
    }

    if (status === "paid" || body?.paid === true) {
      order.status = "PAID";
      order.paid_at = new Date().toISOString();
      store.set(orderId, order);
    }

    return res.status(200).json({
      success: true,
      message: null,
    });
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(400).json({
      success: false,
      message: "Erro interno",
    });
  }
}
