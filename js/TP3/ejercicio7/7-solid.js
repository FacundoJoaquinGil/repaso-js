function obtenerValorInput() {
    return document.getElementById("inputTxt").value;
}

function limpiarInput() {
    document.getElementById("inputTxt").value = "";
}

function esValorValido(texto) {
    return texto.trim() !== "";
}

function mostrarError(mensaje) {
    alert(mensaje);
}

function actualizarTexto(texto) {
    const textoInicial = document.getElementById("inicialTxt");
    textoInicial.innerHTML = texto;
    textoInicial.style.color = "aqua";
}

function cambiarTexto() {
    const valorInput = obtenerValorInput();

    if (!esValorValido(valorInput)) {
        mostrarError("No se ingresó ningún valor");
        return;
    }

    actualizarTexto(valorInput);
    limpiarInput();
}

function reiniciar() {
    location.reload();
}