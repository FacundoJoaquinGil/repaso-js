const form = document.getElementById("form");
form.addEventListener("submit", analizarPalabra)

function analizarPalabra(event){
    event.preventDefault()
    const palabraIngresada = document.getElementById("palabraIngresada").value;
    const palabraReversa = palabraIngresada.split('').reverse().join('');
    console.log(palabraIngresada === palabraReversa)
}
