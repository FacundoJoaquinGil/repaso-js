function cambiarTexto() {
   let valorInput = document.getElementById("inputTxt").value

    if(valorInput.trim() == ""){

        alert("No se ingresó ningun valor")

        return
    }

    const textoInicial = document.getElementById("inicialTxt")

    textoInicial.innerHTML = valorInput
    textoInicial.style.color = "aqua"

    document.getElementById("inputTxt").value = ""
}

function reiniciar() {
    location.reload();
}
