const express = require('express');
const router = express.Router();

router.post('/novo', require('../../modules/usuarios/novo'));
router.post('/editar', require('../../modules/usuarios/editar'));
router.post('/apagar', require('../../modules/usuarios/apagar'));
router.post('/pesquisar/codigo', require('../../modules/usuarios/pesquisar_id'));
router.post('/pesquisar/nome', require('../../modules/usuarios/pesquisar_nome'));
router.post('/pesquisar/cpf', require('../../modules/usuarios/pesquisar_cpf'));
router.post('/pesquisar/todos', require('../../modules/usuarios/pesquisar_todos'));
router.post('/pesquisar/email', require('../../modules/usuarios/pesquisar_email'));

module.exports = router;