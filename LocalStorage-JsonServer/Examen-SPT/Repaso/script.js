const anioActual = new Date().getFullYear()
fechaFooter.innerHTML=`Todos los derechos reservados ${anioActual}`

const usuarios = [
  {
    id: 1,
    nombre: "Joaquin Gil",
    email: "facundojoagl@gmail.com",
    activo: true
  },
  {
    id: 2,
    nombre: "María Gómez",
    email: "maria.gomez@gmail.com",
    activo: false
  },
  {
    id: 3,
    nombre: "Lucas Fernández",
    email: "lucas.fernandez@gmail.com",
    activo: true
  },
  {
    id: 4,
    nombre: "Ana Rodríguez",
    email: "ana.rodriguez@gmail.com",
    activo: true
  },
  {
    id: 5,
    nombre: "Pedro López",
    email: "pedro.lopez@gmail.com",
    activo: false
  }
];

const pintarUsuarios = document.getElementById("todosLosUsuarios")

function getAll(){
    pintarUsuarios.innerHTML = ""
    usuarios.forEach((usuario, index) =>{
        pintarUsuarios.innerHTML += `<li>${usuario.nombre} <button type="button" onclick="cambiar(${index})">Cambiar Estado</button> <button type="button" onclick="eliminar(${index})">Eliminar</button> </li>`
    })
}
getAll()

function usuariosActivos(){
    const usersActive = document.getElementById("usuariosActivos")
    usersActive.innerHTML = ""

    let listaUsuariosActivos = []
    listaUsuariosActivos = usuarios.filter(usuario => usuario.activo === true )

    listaUsuariosActivos.forEach(usuario =>{
        usersActive.innerHTML += `<li>${usuario.nombre}</li>`
    })
}
usuariosActivos()

const formData = document.getElementById("form")

formData.addEventListener("submit", buscarPorEmail)

function buscarPorEmail(event){
    event.preventDefault()

    const dibujarEmail = document.getElementById("emailEncontrado")
    dibujarEmail.innerHTML = ""

    const inputValue = document.getElementById("inputEmail").value

    const valorEncontrado = usuarios.find(usuario => usuario.email === inputValue)

    if(valorEncontrado){
        dibujarEmail.innerHTML = `Email encontrado de: ${valorEncontrado.nombre}`
    }else{
        dibujarEmail.innerHTML = `No se encontró ningun usuario con ese email`
    }
}

function eliminar(index){
    usuarios.splice(index, 1)
    getAll()
    usuariosActivos()
}

function cambiar(index){
    usuarios[index].activo = !usuarios[index].activo
    usuariosActivos()
}