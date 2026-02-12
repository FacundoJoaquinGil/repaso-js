const express = require("express");
const { registro } = require("../controllers/registro.controller")
const uploadImage = require("../middlewares/uploadImage");
const {requireImage} = require("../middlewares/requireImage");

const router = express.Router();

router.post(
  "/registro",
  uploadImage.single("fotoPerfil"),
  requireImage, // verifica req.file y si falta lanza error
  registro
);

module.exports = router;
