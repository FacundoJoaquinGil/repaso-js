const express = require("express")
const cors = require("cors"); //le da permiso al dominio del front para pasar
const {config} = require("dotenv") //falta env-var y dot-env
const loginRoute = require("./routes/login.route");
const registroRoute = require("./routes/registro.route");


config()
const app = express()
app.use(cors());
app.use(express.json()); //Para usar JSON

app.use(loginRoute); //ruta
app.use(registroRoute); //ruta

app.use("/uploads", express.static("uploads"));


const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})


