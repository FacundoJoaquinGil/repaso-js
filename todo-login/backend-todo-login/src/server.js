const express = require("express")
const cors = require("cors"); //le da permiso al dominio del front para pasar
const {config} = require("dotenv") //falta env-var y dot-env
const loginRoute = require("./routes/login.route");
const registroRoute = require("./routes/registro.route");
const usuarios = require("./routes/usuarios.route");
const {errorHandler} = require("./middlewares/errorHandler");


config()
const app = express()
app.use(cors());
app.use(express.json()); //Para usar JSON

app.use(loginRoute); 
app.use(registroRoute); 
app.use(usuarios) // nueva ruta

app.use("/uploads", express.static("uploads")); //archivos estaticos (imagenes)

// MIDDLEWARE DE ERRORES: debe ir después de las rutas
app.use(errorHandler);

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})


