// rotas
const express = require('express');
const router = express.Router();

const usuarios = require('./routes/usuarios')
router.use('/usuarios', usuarios);

module.exports = router;