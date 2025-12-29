const url = "http://localhost:3000/login";

async function registrar() {
    const user = document.getElementById("input-txt").value
    const pass = document.getElementById("input-pass").value

    const data = {
        user,
        pass
    }
    try {
        if (user == "" || pass == "") {
            alert("usario o contraseña vacio")
        } else {
            const response = await fetch('http://example.com/movies.json')
                .then(response => response.json())
                .then(data => console.log(data));
                
            console.log("Usuario registrado con éxito:", response.data);
            alert("Usuario registrado con éxito!");
        }

    } catch (error) {
        console.log(`Error al registrar usuario ${error}`)
    }
}

async function ingresar() {
    const user = document.getElementById("input-txt").value;
    const pass = document.getElementById("input-pass").value;

    if (!user || !pass) {
        return alert("Usuario o contraseña no pueden estar vacíos.");
    }

    try {

        const searchUrl = `${url}?user=${user}&pass=${pass}`;
        const response = await axios.get(searchUrl);
        const usuarioEncontrado = response.data;

        if (usuarioEncontrado.length > 0) {
            alert(`¡Bienvenido, ${user}!`);
            window.location.href = 'index.html';

        } else {
            alert("Usuario o contraseña inválidos.");
        }

    } catch (error) {
        console.error("Error al intentar iniciar sesión:", error);
        alert("Ocurrió un error al contactar al servidor.");
    }
}