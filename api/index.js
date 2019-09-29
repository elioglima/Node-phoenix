// rotas
const express = require("express");
const router = express.Router();

const acesso = require("./routes/acesso");
const usuarios = require("./routes/usuarios");
router.use("/acesso", acesso);
router.use("/usuarios", usuarios);

module.exports = router;
