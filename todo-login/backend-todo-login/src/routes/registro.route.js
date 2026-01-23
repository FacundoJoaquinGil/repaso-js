const express = require("express");
const {escribirDB, leerDB} = require("../../services/db.service")
const router = express.Router();


router.post("/registro", (req, res) => {
    const db = leerDB()

    const {username, mail, pass, fotoPerfil, tareas} = req.body

    const nuevoUsuario = {
        id: Date.now().toString(),
        username,
        mail,
        pass,
        fotoPerfil: fotoPerfil || "",
        tareas
    }

    db.usuarios.push(nuevoUsuario);
    escribirDB(db)
    res.json({ mensaje: "Registro correcto" });
})

module.exports = router;