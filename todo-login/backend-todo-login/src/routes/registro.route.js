const express = require("express");
const { registro } = require("../controllers/registro.controller")
const uploadImage = require("../middlewares/uploadImage");

const router = express.Router();

router.post(
  "/registro",
  uploadImage.single("fotoPerfil"),
  registro
);

module.exports = router;
