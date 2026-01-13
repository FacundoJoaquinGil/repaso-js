const url = "http://localhost:3000/usuarios";
const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"));
const usuarioId = usuarioLogeado.id;
const mensajeBienvenida = document.getElementById("titulo-bienvenida");

let fechaCompleta = "";
let horaCompleta = "";

mensajeBienvenida.innerHTML = `Bienvenido ${usuarioLogeado.username}`;
parrafoMail.innerHTML = `${usuarioLogeado.mail}`;

//Experimental
const fotoPerfil = document.getElementById("fotoPerfil");
fotoPerfil.src = usuarioLogeado.fotoPerfil;
//

function actualizarFechaHora() {

    const fecha = new Date();

    //FECHA
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
    mes = (mes < 10 ? '0' : '') + mes;
    dia = (dia < 10 ? '0' : '') + dia;

    fechaCompleta = `${dia}/${mes}/${año}`;
    //HORA
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    horas = (horas < 10 ? '0' : '') + horas;
    minutos = (minutos < 10 ? '0' : '') + minutos;

    horaCompleta = `${horas}:${minutos}`
}


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

    actualizarFechaHora();
    try {
        const usuarioData = await usuarioDataActual()

        const tarea = dataTarea.value;
        const nuevaTarea = {
            id: Date.now(),
            fecha: fechaCompleta,
            hora: horaCompleta,
            tarea: tarea,
            realizada: false
        };
        usuarioData.tareas.push(nuevaTarea);


        await axios.patch(`${url}/${usuarioId}`, {
            tareas: usuarioData.tareas
        });
        alert("Tarea agregada 📝");
    } catch (error) {
        console.log(error);
    }
}

async function dibujarTareas(){

    try {
        const contenedorTareas = document.getElementById("contenedorTareas");
        contenedorTareas.innerHTML = ""
        const data = await usuarioDataActual();
        const dataTareas = data.tareas

        if (dataTareas.length === 0) {
            contenedorTareas.innerHTML += `
            <div class="tarea-card">
                <div class="encabezado-tarea-vacia">
                <div class="contenedor-comentario-tarea">
                <p class="tareas-vacia">No hay tareas todavía. ¡Escribe la primera!</p>
                </div>
            </div> `
        } else {
            dataTareas.forEach(t => {
                contenedorTareas.innerHTML += `
            <div class="tarea-card">
                <div class="encabezado-tarea">
                <input type="checkbox" class="input-checkbox" onchange="tareaHecha(this, ${t.id})" ${t.realizada ? "checked" : ""}>
                <p class="pFecha ${t.realizada ? "pFechaDark" : ""}">${t.fecha}</p>
                <p class="pHora ${t.realizada ? "pHoraDark" : ""}">${t.hora}</p>
                <button onclick="eliminarTarea(${t.id})" class="btn-eliminar">Eliminar</button>
                </div>

                <div class="contenedor-comentario-tarea">
                <p class="pTarea ${t.realizada ? "pTareaHecha" : ""}">${t.tarea}</p>
                </div>
            </div> `
            });
        }
    } catch (error) {
        console.log(error)
    }
}
dibujarTareas()

async function eliminarTarea(id) {
    try {
        const usuarioData = await usuarioDataActual()
        const tarea = usuarioData.tareas;
        const tareaEliminada = tarea.filter(u => u.id != id)
        const response = await axios.patch(`${url}/${usuarioId}`, {
            tareas: tareaEliminada
        })
        dibujarTareas()
        alert("Tarea Eliminada ✅")
    } catch (error) {
        console.log(error);
    }

}

async function tareaHecha(checkbox, id) {
    try {
        const usuarioData = await usuarioDataActual()
        let todasLasTareas = usuarioData.tareas;
        let index = todasLasTareas.findIndex(u => u.id === id)
        todasLasTareas[index].realizada = !todasLasTareas[index].realizada
        console.log(todasLasTareas)
        await axios.patch(`${url}/${usuarioId}`, {
            tareas: todasLasTareas
        })
        dibujarTareas()
    } catch (error) {
        console.log(error)
    }
}



