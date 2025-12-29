const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

//falta librerias ejs

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { titulo: 'Bienvenido a mi servidor express' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

