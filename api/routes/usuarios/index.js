const express = require('express');
const router = express.Router();

router.post('/incluir', require('../../modules/usuarios/incluir'));
router.post('/pesquisar/nome', require('../../modules/usuarios/pesquisar_nome'));

module.exports = router;