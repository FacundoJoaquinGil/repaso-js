const anioDinamico = new Date().getFullYear();
anio.innerHTML = `Todos los derechos reservados ${anioDinamico}`

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

const listaTodosUsuarios = document.getElementById("listaTodosUsuarios");

function mostrarUsuarios() {
  listaTodosUsuarios.innerHTML = "";
  if (usuarios.length === 0) {
    listaTodosUsuarios.innerHTML = `<li class="listVoid">No se encontraron usuarios</li>`;

  } else {
    listaUsuarios()
  }
}
mostrarUsuarios();

function listaUsuarios(){

  usuarios.forEach((usuario, index) => {
    listaTodosUsuarios.innerHTML += `<li>
                                      ${usuario.nombre}  
                                      <button type="button" class="btn-cambiar" onclick="cambiarEstado(${index})">Cambiar Estado</button>
                                      <button type="button" class="btn-eliminar" onclick="eliminar(${index})">Eliminar</button>
                                    </li>`;
  });
}

function eliminar(index){
  usuarios.splice(index, 1);
  mostrarUsuarios()
}

const listaUsuariosActivos = document.getElementById("listaUsuariosActivos")

function usuariosActivos() {
  let listaActivos
  listaActivos = usuarios.filter(usuario => usuario.activo === true)

  if (listaActivos.length === 0) {
    listaUsuariosActivos.innerHTML += `<li class="listVoid">No se encontraron usuarios</li>`
  } else {
    listaActivos.forEach(usuario => {
      listaUsuariosActivos.innerHTML += `<li>${usuario.nombre}</li>`
    })
  }
}
usuariosActivos()

formBuscar.addEventListener("submit", buscarEmail)

function buscarEmail(event){
  event.preventDefault()

  const email = document.getElementById("input-email").value
  const usuarioEmailEncontrado = usuarios.find(usuario => usuario.email === email)

  if(usuarioEmailEncontrado){
    usuarioEmail.innerHTML = `<p class="sucess">Usuario encontrado ${usuarioEmailEncontrado.nombre}</p>`
    email.innerHTML = ""
  }else{
    usuarioEmail.innerHTML = `<p class="listVoid">No se encontraron usuarios</p>`
  }
}
