// const {escribirDB, leerDB} = require("../services/db.service")
// const express = require("express")
// const router = express.Router();


// router.post("/registro", (req, res) => {
//     const db = leerDB()

//     const {username, mail, pass, fotoPerfil, tareas} = req.body

//     const nuevoUsuario = {
//         id: Date.now().toString(),
//         username,
//         mail,
//         pass,
//         fotoPerfil: fotoPerfil || "",
//         tareas
//     }

//     db.usuarios.push(nuevoUsuario);
//     escribirDB(db)
//     res.json({ mensaje: "Registro correcto" });
// })

// module.exports = router;

const { escribirDB, leerDB } = require("../../services/db.service");
const express = require("express");
const uploadProfile = require("../middlewares/uploadProfile");

const router = express.Router();

router.post(
  "/registro",
  uploadProfile.single("input-image-register"),
  (req, res) => {
    const db = leerDB();

    const { username, mail, pass } = req.body;
    const tareas = JSON.parse(req.body.tareas || "[]");

    const nuevoUsuario = {
      id: Date.now().toString(),
      username,
      mail,
      pass,
      fotoPerfil: req.file ? `/uploads/${req.file.filename}` : "",
      tareas
    };

    db.usuarios.push(nuevoUsuario);
    escribirDB(db);

    res.json({ mensaje: "Registro correcto" });
  }
);

module.exports = router;
