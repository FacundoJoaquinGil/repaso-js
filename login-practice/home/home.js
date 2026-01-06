const mensajeBienvenida = document.getElementById("titulo-bienvenida");
const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"));

const fotoPerfil = document.getElementById("fotoPerfil");

fotoPerfil.src = usuarioLogeado.fotoPerfil;


mensajeBienvenida.innerHTML = `Bienvenido ${usuarioLogeado.username}`;

parrafoMail.innerHTML = `${usuarioLogeado.mail}`;

function cerrarSesion() {
    localStorage.removeItem("usuarioLogeado");
    window.location.href = "../logeo/logeo.html";
}

const fecha = new Date();

//Fecha
let año = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();

mes = (mes < 10 ? '0' : '') + mes;
dia = (dia < 10 ? '0' : '') + dia;

console.log(`${dia}/${mes}/${año}`);

//Hora
let horas = fecha.getHours();
let minutos = fecha.getMinutes();

horas = (horas < 10 ? '0' : '') + horas;
minutos = (minutos < 10 ? '0' : '') + minutos;

console.log(`${horas}:${minutos}`);

