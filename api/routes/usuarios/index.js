const express = require('express');
const router = express.Router();

router.post('/incluir', require('../../modules/usuarios/incluir'));
router.post('/alterar', require('../../modules/usuarios/alterar'));
router.post('/remover', require('../../modules/usuarios/remover'));
router.post('/pesquisar/codigo', require('../../modules/usuarios/pesquisar_id'));
router.post('/pesquisar/nome', require('../../modules/usuarios/pesquisar_nome'));
router.post('/pesquisar/cpf', require('../../modules/usuarios/pesquisar_cpf'));
router.post('/pesquisar/todos', require('../../modules/usuarios/pesquisar_todos'));

module.exports = router;