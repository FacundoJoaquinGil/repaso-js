const express = require("express")
const {config} = require("dotenv")
const cors = require("cors"); //adicional
const {leerDB} = require("../services/db.service");


config()
const app = express()
const port = process.env.PORT || 2000;

app.use(cors()); //adicional

app.get("/db", (req, res) => {
  const db = leerDB();
  res.json(db);
});


app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
    console.log(`Base de datos corriendo en http://localhost:${port}/db`)
})

