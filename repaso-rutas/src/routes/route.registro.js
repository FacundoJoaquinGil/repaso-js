const Router = require("express")
const { leerDB, escribirDB } = require("../../services/services.db")

const router = Router()

router.post("/registro", (req,res) =>{
    let db = leerDB();

    const {username, mail, pass, fotoPerfil, tareas} = req.body;

    const usuarioNuevo = {
        id: Date.now().toString(),
        username,
        mail,
        pass,
        fotoPerfil: fotoPerfil || "",
        tareas: tareas || [],
    }
    db.usuarios.push(usuarioNuevo)

    escribirDB(db)

    res.json({
        message: "usuario creado con exito"
    })
})

module.exports = router