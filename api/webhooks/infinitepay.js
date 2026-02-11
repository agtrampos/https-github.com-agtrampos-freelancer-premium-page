export default async function handler(req, res) {
  try {
    const body = req.body;
    console.log("WEBHOOK RECEBIDO:", body);
    return res.status(200).json({ success: true, message: null });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Erro interno" });
  }
}
