const url = "http://localhost:3000/registro";
const formRegistro = document.getElementById("form-registro");

formRegistro.addEventListener("submit", registrar)

async function registrar(event) {
    event.preventDefault()

    const username = document.getElementById("input-username-register").value
    const mail = document.getElementById("input-mail-register").value
    const pass = document.getElementById("input-pass-register").value
    const tareas = []
    
    const data = {username, mail , pass, tareas}
    
    try {
        const registro = await axios.post(url, data);
        alert(`${data.username} registrado con exito`);
        window.location.href = "../home/login.html";
    } catch (error) {
        console.log(error)
    }
}

//const image = document.getElementById("input-image-register").value

function checkboxEstado(){
    const checkbox = document.getElementById("checkboxPass");
    const pass = document.getElementById("inputpassregister")

    checkbox.checked ? pass.type = "text" : pass.type = "password" 
}