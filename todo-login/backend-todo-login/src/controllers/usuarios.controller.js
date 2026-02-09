const { leerDB } = require("../services/db.service");

const getUsuarioById = (req, res) => {
    const { id } = req.params; //dato del endpoint

    const db = leerDB();

    const usuario = db.usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(usuario);
};

module.exports = {
    getUsuarioById
};