// const { escribirDB, leerDB } = require("../services/db.service");
// const express = require("express");
// const uploadProfile = require("../middlewares/uploadImage");
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

const { escribirDB, leerDB } = require("../services/db.service");
const express = require("express");
const uploadImage = require("../middlewares/uploadImage");

const router = express.Router();

router.post(
  "/registro",
  uploadImage.single("fotoPerfil"),
  (req, res) => {
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
);

module.exports = router;
