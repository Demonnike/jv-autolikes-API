
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "JV Auto Likes API",
    status: "online",
    version: "1.0.0"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API funcionando"
  });
});

app.post("/likes", (req, res) => {
  const { uid } = req.body || {};

  if (!uid || !/^\d+$/.test(String(uid))) {
    return res.status(400).json({
      status: "error",
      message: "PLAYER_ERROR",
      detail: "UID inválido"
    });
  }

  return res.status(501).json({
    status: "pending",
    message: "LIKES_PROVIDER_NOT_CONFIGURED",
    detail: "O serviço de envio ainda não foi conectado.",
    uid: String(uid)
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`JV Auto Likes API rodando na porta ${PORT}`);
});
