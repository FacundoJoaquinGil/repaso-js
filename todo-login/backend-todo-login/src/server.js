const express = require("express")
const cors = require("cors"); //le da permiso al dominio del front para pasar
const {config} = require("dotenv") //falta env-var
const loginRoute = require("./routes/login.route");


config()
const app = express()
app.use(cors());
app.use(express.json()); //Para usar JSON

app.use(loginRoute); //ruta
const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})

