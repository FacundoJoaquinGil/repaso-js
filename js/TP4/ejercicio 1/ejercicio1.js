let numeroRandom = Math.floor(Math.random() * 100) + 1;
console.log(numeroRandom);
let contador = 0;

function adivinarNumero() {
  contador = contador + 1;

  document.getElementById("contador").innerHTML = `intentos: ${contador}`;

  let num = document.getElementById("inputIngresarNumero").value;
  if (num > numeroRandom) {
    document.getElementById("pistas").innerHTML = "mas bajo! ⬇️";
  } else {
    document.getElementById("pistas").innerHTML = "mas arribaa ⬆️";
  }
  if (num == numeroRandom) {
    document.getElementById("pistas").innerHTML = "GANASTE! 🎉";
  }
}

function reiniciar() {
  location.reload();
}
