const arrayDias = [
  "domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviebre",
  "diciembre",
];

function estrablecerFechaHora() {
  let fechaHora = new Date();
  let hora = fechaHora.getHours();
  let minutos = fechaHora.getMinutes();
  let segundos = fechaHora.getSeconds();

  let fecha = document.getElementById("fechaActual");
  let horario = document.getElementById("horaActual");

  let ampm = "";

  if (hora > 12) {
    ampm = "PM";
    hora = hora - 12;
  } else {
    ampm = "AM";
  }

  fecha.innerHTML = `${
    arrayDias[fechaHora.getDay()]
  }, ${fechaHora.getDate()} del ${fechaHora.getMonth()}, año ${fechaHora.getFullYear()}`;

  console.log(fecha);

  horario.innerHTML = `${hora}, ${minutos}, ${segundos}, ${ampm}`;
}

setInterval(estrablecerFechaHora, 1000);
