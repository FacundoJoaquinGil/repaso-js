const url = "http://localhost:3000/usuarios";
const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"));
const usuarioId = usuarioLogeado.id;
const mensajeBienvenida = document.getElementById("titulo-bienvenida");

mensajeBienvenida.innerHTML = `Bienvenido ${usuarioLogeado.username}`;
parrafoMail.innerHTML = `${usuarioLogeado.mail}`;

//Experimental
const fotoPerfil = document.getElementById("fotoPerfil");
fotoPerfil.src = usuarioLogeado.fotoPerfil;
//

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

function cerrarSesion() {
    localStorage.removeItem("usuarioLogeado");
    window.location.href = "../logeo/logeo.html";
}

async function usuarioDataActual() {
    try {
        const usuarioActual = await axios.get(`${url}/${usuarioId}`);
        return usuarioActual.data;
    } catch (error) {
        console.log(error);
    }
}
const form = document.getElementById("formTarea");
const dataTarea = document.getElementById("txtTarea");
form.addEventListener("submit", agregarTarea)

async function agregarTarea(event) {
    event.preventDefault();
    try {
        const usuarioData = await usuarioDataActual()

        const tarea = dataTarea.value;
        const nuevaTarea = {
            id: Date.now(),
            fecha: fechaCompleta,
            hora: horaCompelta,
            tarea: tarea
        };
        usuarioData.tareas.push(nuevaTarea);


        await axios.patch(`${url}/${usuarioId}`, {
            tareas: usuarioData.tareas
        });
        alert("Tarea agregada ✅");
    } catch (error) {
        console.log(error);
    }
}



async function dibujarTareas() {
    const contenedorTareas = document.getElementById("contenedorTareas");

    const pFecha = document.getElementById("pFecha");
    const pHora = document.getElementById("pHora");
    const pTarea = document.getElementById("pTarea");

    const data = await usuarioDataActual();
    const dataTareas = data.tareas

    dataTareas.forEach(t => {
        contenedorTareas.innerHTML += `
            <div class="encabezado-tarea">
                <input type="checkbox" class="input-checkbox">
                <p id="pFecha" class="pFecha">${t.fecha}</p>
                <p id="pHora" class="pHora">${t.hora}</p>
                <button class="btn-eliminar">Eliminar</button>
            </div>

            <div class="contenedor-comentario-tarea">
                <p id="pTarea" class="pTarea">${t.tarea}</p>
            </div> `
    });
}

dibujarTareas()
