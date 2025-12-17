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

  if (usuarios.length === 0) {

    listaTodosUsuarios.innerHTML = `<li class="listVoid">No se encontraron usuarios</li>`;

  } else {

    listaTodosUsuarios.innerHTML = "";

    usuarios.forEach(usuario => {
      listaTodosUsuarios.innerHTML += `<li>${usuario.nombre}</li>`;
    });
  }
}
mostrarUsuarios();

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

