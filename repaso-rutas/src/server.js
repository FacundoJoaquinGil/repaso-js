const express = require("express")
const rutaUsuario = require("./routes/route.usuario")

 
const app = express();
const port = 3000;

app.use(express.json())


app.use("/", rutaUsuario)


app.listen(port,() => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})


