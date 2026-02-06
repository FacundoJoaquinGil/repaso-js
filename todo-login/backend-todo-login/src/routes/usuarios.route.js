const express = require("express");
const router = express.Router();
const { getUsuarioById } = require("../controllers/usuarios.controller");

router.get("/:id", getUsuarioById);

module.exports = router;
