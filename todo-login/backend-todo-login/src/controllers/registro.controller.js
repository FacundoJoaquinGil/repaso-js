const { escribirDB, leerDB } = require("../services/db.service");

const registro = (req, res) => {
    const db = leerDB();
    const { username, mail, pass, tareas } = req.body;

    const nuevoUsuario = {
        id: Date.now().toString(),
        username,
        mail,
        pass,
        fotoPerfil: req.file ? req.file.filename : "",
        tareas: tareas ? JSON.parse(tareas) : []
    };
    db.usuarios.push(nuevoUsuario);
    escribirDB(db);
    res.json({ mensaje: "Registro correcto" });
}

module.exports = {
    registro
}