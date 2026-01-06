const url = "http://localhost:3000/usuarios";
const formRegistro = document.getElementById("form-registro");

formRegistro.addEventListener("submit", registrar)

async function registrar(event) {
    event.preventDefault()

    const username = document.getElementById("input-username-register").value
    const mail = document.getElementById("input-mail-register").value
    const pass = document.getElementById("input-pass-register").value
    
    const data = {username, mail , pass}
    
    try {
        const registro = await axios.post(url, data);
        alert(`${registro.data.username} registrado con exito`);
    } catch (error) {
        console.log(error)
    }
}

//const image = document.getElementById("input-image-register").value

