const form = document.getElementById("form")

form.addEventListener("submit", guardarDatos)

function guardarDatos(event) {

    event.preventDefault();
    const nombre = document.getElementById("input-name").value
    const email = document.getElementById("input-email").value
    const edad = document.getElementById("input-edad").value
    const comentario = document.getElementById("comentario").value

    const data = {
        nombre,
        email,
        edad,
        comentario
    }
    const registroJSON = localStorage.getItem("DatosUsuario");
    let listaUsuarios;

    if (registroJSON) {
        listaUsuarios = JSON.parse(registroJSON);
    } else {
        listaUsuarios = [];
    }
    listaUsuarios.push(data)

    const listaActualizada = JSON.stringify(listaUsuarios)
    localStorage.setItem("DatosUsuario", listaActualizada)
    form.reset();
    mostrarDatos()
}

function mostrarDatos() {
    const listaHTML = document.getElementById("listaRegistros")
    listaHTML.innerHTML = '';

    const registrosJSON = localStorage.getItem('DatosUsuario');

    if (!registrosJSON) {
        listaHTML.innerHTML = '<p class="parrafo-warning">Aún no hay registros guardados...</p>';
        return;
    }
    const listaUsuarios = JSON.parse(registrosJSON)
    
    listaUsuarios.forEach((usuario, index) => {
        listaHTML.innerHTML += `<p class="lista">${usuario.nombre}, ${usuario.email}, ${usuario.edad}, ${usuario.comentario}</p>`
    });

}

function limpiarLista() {
    localStorage.clear()
    mostrarDatos()
}