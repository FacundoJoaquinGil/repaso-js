const url = "http://localhost:3000/usuarios";
const form = document.getElementById("form");

const inputEmail = document.getElementById("input-mail");
const inputPass = document.getElementById("input-pass");

form.addEventListener("submit", ingresar)

async function ingresar(event) {
    event.preventDefault()
    try {

        const mail = inputEmail.value;
        const pass = inputPass.value;

        const usuarioEncontrado = await axios.get(`${url}?mail=${mail}&pass=${pass}`)

        if(usuarioEncontrado.data.length != 0){
            
            const usuario = usuarioEncontrado.data[0];
            
            const usuarioLogeado = {
                id: usuario.id,
                username: usuario.username,
                mail: usuario.mail
            }
            
            localStorage.setItem("usuarioLogeado", JSON.stringify(usuarioLogeado))
            
            window.location.href = "../home/home.html"

        }else{
            alert("contraseña o email incorrectos")
        }

    } catch (error) {
        console.log(error)
    }
}


function checkboxEstado(){
    const checkbox = document.getElementById("checkboxPass");

    checkbox.checked ? inputPass.type = "text" : inputPass.type = "password" 
}
