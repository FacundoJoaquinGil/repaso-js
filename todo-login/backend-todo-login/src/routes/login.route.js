const express = require("express");
const router = express.Router();
const { leerDB } = require("../../services/db.service");

router.post("/login", (req, res) => {
    const db = leerDB();
    const { email, pass } = req.body
    const usuarioEncontrado = db.usuarios.find(u => u.email === email && u.pass === pass)
    
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
