const url = "http://localhost:3000/usuarios";
const form = document.getElementById("form");

form.addEventListener("submit", guardarDatos);

document.addEventListener("DOMContentLoaded", () => {
    mostrarDatos();
});

async function guardarDatos(event) {
    event.preventDefault();

    const nombre = document.getElementById("input-name").value;
    const email = document.getElementById("input-email").value;
    const edad = document.getElementById("input-edad").value;
    const comentario = document.getElementById("comentario").value;

    const data = { nombre, email, edad, comentario };
    try {
        await axios.post(url, data);
        form.reset();
        mostrarDatos();
    } catch (error) {
        console.error("Error al guardar los datos:", error);
    }
}

async function mostrarDatos() {
    const listaHTML = document.getElementById("listaRegistros");
    try {
        const response = await axios.get(url);
        const listaUsuarios = response.data;

        listaHTML.innerHTML = "";
        if (listaUsuarios.length === 0) {
            listaHTML.innerHTML = `<p class="parrafo-warning">No hay registros guardados.</p>`;
            return;
        }
        listaUsuarios.forEach(usuario => {
            listaHTML.innerHTML += `
                <p class="lista">
                    ${usuario.nombre} - ${usuario.email} - ${usuario.edad} - ${usuario.comentario}
                </p>
            `;
        });
    }catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}