const express = require("express");
const router = express.Router();

router.post("/doc", require("../../modules/acesso/logar_doc"));
router.post("/logar", require("../../modules/acesso/logar_senha"));
module.exports = router;
