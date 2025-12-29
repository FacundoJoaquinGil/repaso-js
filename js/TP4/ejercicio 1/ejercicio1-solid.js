let contador = 0;
let numeroRandom = generarNumeroRandom();

function generarNumeroRandom() {
  return Math.floor(Math.random() * 100) + 1;
}
console.log("Número a adivinar:", numeroRandom);

function obtenerValor() {
  const valorString = document.getElementById("inputIngresarNumero").value.trim();
  if (valorString === "") return NaN;
  const valor = parseInt(valorString, 10);
  return isNaN(valor) ? NaN : valor;
}

function sumarContador() {
  contador++;
  document.getElementById("contador").innerHTML = `intentos: ${contador}`;
}

function adivinarNumero() {
  sumarContador();
  const valorObtenido = obtenerValor();
  validaciones(valorObtenido);
}

function validaciones(valorObtenido) {
  if (isNaN(valorObtenido)) {
    alert("No se ingresó ningún número válido");
    return;
  }

  if (valorObtenido === numeroRandom) {
    document.getElementById("pistas").innerHTML = "¡GANASTE! 🎉";
    return;
  }

  if (valorObtenido > numeroRandom) {
    document.getElementById("pistas").innerHTML = "más bajo! ⬇️";
  } else {
    document.getElementById("pistas").innerHTML = "más arriba ⬆️";
  }
}

function reiniciar() {
  location.reload();
}
