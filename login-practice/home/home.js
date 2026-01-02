const mensajeBienvenida = document.getElementById("titulo-bienvenida")
const username = localStorage.getItem('username')

mensajeBienvenida.innerHTML = `Bienvenido ${username}`