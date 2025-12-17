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

console.log(usuarios);

function mostrarUsuarios(){
  const listaUsuarios = ""

  usuarios.map(usuario =>{
    listaTodosUsuarios.innerHTML = `<li>${usuario.nombre}</li>`
  })
}
