const express = require("express");
const router = express.Router();
const { leerDB } = require("../../services/db.service");

router.post("/login", (req, res) => {
    const db = leerDB();
    const { mail, pass } = req.body
    const usuarioEncontrado = db.usuarios.find(u => u.mail === mail && u.pass === pass)
    
    if (!usuarioEncontrado) {
        return res.status(401).json({
            mensaje: "Credenciales incorrectas"
        });
    }

    res.json({
        mensaje: "Login correcto",
        usuarioEncontrado
    });
})

module.exports = router;
