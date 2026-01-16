const express = require("express")
const {config} = require("dotenv")
const cors = require("cors"); //adicional

config()
const app = express()
const port = process.env.PORT || 2000;

app.use(cors()); //adicional

app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})

