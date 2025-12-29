function cantidadCiudades() {
    
  const ciudades = [];

  while (true) {
    const ciudad = prompt("ingrese ciudades, cancele para mostrar");

    if (ciudad !== null) {
      ciudades.push(ciudad);
    } else {
      break;
    }
  }
  return ciudades
}

const ciudadesGuardadas = cantidadCiudades()

document.body.innerHTML = `
  <ul>
    ${ciudadesGuardadas.map((c) => `<li>${c}</li>`)}
  </ul>
`;
