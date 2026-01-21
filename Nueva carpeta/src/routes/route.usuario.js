const {leerDB} = require("../../services/services.db")
const { Router } = require("express")

const router = Router()

function obtenerUsuarios(){
    const db = leerDB().usuarios;
    const usuarios = db.map(u => u.nombre);
    return usuarios
};

router.get("/usuarios", (req, res) =>{
    res.json(obtenerUsuarios())
})

module.exports = router
