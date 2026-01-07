const url = "http://localhost:3000/usuarios";
const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"));
const mensajeBienvenida = document.getElementById("titulo-bienvenida");

//Experimental
const fotoPerfil = document.getElementById("fotoPerfil");
fotoPerfil.src = usuarioLogeado.fotoPerfil;
//

mensajeBienvenida.innerHTML = `Bienvenido ${usuarioLogeado.username}`;
parrafoMail.innerHTML = `${usuarioLogeado.mail}`;

function cerrarSesion() {
    localStorage.removeItem("usuarioLogeado");
    window.location.href = "../logeo/logeo.html";
}

const usuarioId = usuarioLogeado.id;


const form = document.getElementById("formTarea");
const dataTarea = document.getElementById("txtTarea");

form.addEventListener("submit", agregarTarea)

async function agregarTarea(event) {
    event.preventDefault()
    try {
        const usuarioActual = await axios.get(`${url}/${usuarioId}`);
        const usuarioData = usuarioActual.data;
        console.log(usuarioData)

        const tarea = dataTarea.value;
        
        const data = {
            id: Date.now(),
            fecha: fechaCompleta,
            hora: horaCompelta,
            tarea: tarea
        }
        const nuevasTareas = usuarioData.tareas.push(data);
        console.log(nuevasTareas)

        await axios.patch(`${url}/${usuarioId}`,{
            tareas: usuarioData.tareas
        })

    } catch (error) {
        console.log(error)
    }
}


//OBTENER FECHA Y HORA
const fecha = new Date();

//FECHA
let año = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();

mes = (mes < 10 ? '0' : '') + mes;
dia = (dia < 10 ? '0' : '') + dia;

const fechaCompleta = `${dia}/${mes}/${año}`;



//HORA
let horas = fecha.getHours();
let minutos = fecha.getMinutes();

horas = (horas < 10 ? '0' : '') + horas;
minutos = (minutos < 10 ? '0' : '') + minutos;

const horaCompelta = `${horas}:${minutos}`


