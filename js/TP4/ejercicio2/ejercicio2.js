let guardarLista = [];

function cargarTareas() {
  pushearData()
  dibujarLista()
  document.getElementById("inputCargarTarea").value = ""
}


function pushearData(){
  let valorInput = document.getElementById("inputCargarTarea").value.trim()
  if(valorInput == ""){
    alert("no se ingresó ninguna tarea")
    return;
  }
  guardarLista.push(valorInput);
}


function dibujarLista() {
  document.getElementById("lista").innerHTML = guardarLista.map((i, id) => 
    `<li class="listado">${i} <button onclick="eliminarLista(${id})" class="btnEliminar">Eliminar</button></li>`
  ).join("");
}

function eliminarLista(id){
  guardarLista.splice(id, 1)
  dibujarLista()
}


