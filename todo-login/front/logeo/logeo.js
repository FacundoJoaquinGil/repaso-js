const url = "http://localhost:3000/login";
const form = document.getElementById("form");

const inputEmail = document.getElementById("input-mail");
const inputPass = document.getElementById("input-pass");

form.addEventListener("submit", ingresar)

async function ingresar(event) {
    event.preventDefault();

    try {

        const data = {
            mail: inputEmail.value,
            pass: inputPass.value
        }    
        const response = await axios.post(`${url}`, data);
        console.log(response)
        const usuario = response.data.usuarioEncontrado
        console.log(usuario)

        const usuarioLogeado = {
            id: usuario.id,
            username: usuario.username,
            mail: usuario.mail,
            fotoPerfil: `http://localhost:3000/uploads/${usuario.fotoPerfil}`
        };


        console.log(usuarioLogeado)

        localStorage.setItem(
            "usuarioLogeado",
            JSON.stringify(usuarioLogeado)
        );

        window.location.href = "../home/home.html";

    } catch (error) {
        alert("Email o contraseña incorrectos");
        console.log(error);
    }
}



function checkboxEstado(){
    const checkbox = document.getElementById("checkboxPass");

    checkbox.checked ? inputPass.type = "text" : inputPass.type = "password" 
}
