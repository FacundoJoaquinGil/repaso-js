const express = require("express")
const rutaUsuario = require("./routes/route.usuario")
const rutaRegistro = require("./routes/route.registro")

 
const app = express();
const port = 3000;

app.use(express.json())


app.use("/", rutaUsuario)
app.use("/", rutaRegistro)


app.listen(port,() => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})


