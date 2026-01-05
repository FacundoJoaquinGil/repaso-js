const mensajeBienvenida = document.getElementById("titulo-bienvenida");
const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"));

mensajeBienvenida.innerHTML = `Bienvenido ${usuarioLogeado.username}`;

parrafoMail.innerHTML = `${usuarioLogeado.mail}`;

function cerrarSesion(){
    localStorage.removeItem("usuarioLogeado");
    window.location.href = "../logeo/logeo.html";
}