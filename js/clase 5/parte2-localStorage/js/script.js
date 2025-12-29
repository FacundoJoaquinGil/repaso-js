    const form = document.getElementById("formRegistro");
    const datosGuardados = document.getElementById("datosGuardados");
    const descargarBtn = document.getElementById("descargarBtn");
    const limpiarBtn = document.getElementById("limpiarBtn");

    // Cargar datos almacenados al iniciar
    mostrarDatos();



    form.addEventListener("submit", (e) => {
      // Prevenir comportamiento por defecto
      // para evitar recarga de página
      e.preventDefault();

      // Objeto que creamos a partir del formulario
      const nuevo = {
        nombre: document.getElementById("nombre").value.trim(),
        edad: parseInt(document.getElementById("edad").value),
        email: document.getElementById("email").value.trim()
      };

      // Obtener lista actual del localStorage
      let registros = JSON.parse(localStorage.getItem("registros")) || [];
      registros.push(nuevo);

      // Guardar en localStorage
      localStorage.setItem("registros", JSON.stringify(registros));

      // Resetear formulario y mostrar datos actualizados
      form.reset();

      // Mostrar datos actualizados
      mostrarDatos();
    });



    // Mostrar datos en pantalla
    function mostrarDatos() {
      // Obtener datos del localStorage y mostrarlos en el pre formateado 
      // Si no hay datos, mostrar un array vacío
      const registros = JSON.parse(localStorage.getItem("registros")) || [];
      // Formatear JSON con indentación de 2 espacios
      // y asignarlo al contenido del elemento pre
      // el método JSON.stringify convierte un valor de JavaScript en una cadena JSON
      datosGuardados.textContent = JSON.stringify(registros, null, 2);
    }



    // Descargar archivo JSON
    descargarBtn.addEventListener("click", () => {
      // Obtener datos del localStorage
      const registros = JSON.parse(localStorage.getItem("registros")) || [];
      // Crear un Blob con los datos JSON
      // y forzar la descarga
      // Un blob es un objeto similar a un archivo de datos inmutables que representa datos que no necesariamente están en un formato nativo de JavaScript
      // un blob puede ser leído como texto o como datos binarios mediante un FileReader.
      const blob = new Blob([JSON.stringify(registros, null, 2)], { type: "application/json" });
      // Crear enlace de descarga
      const enlace = document.createElement("a");
      // Asignar URL al enlace y forzar descarga con nombre "datos.json"
      enlace.href = URL.createObjectURL(blob);
      // Liberar URL después de la descarga
      enlace.download = "datos.json";
      // Simular clic para iniciar descarga
      enlace.click();
    });



    // Limpiar almacenamiento
    limpiarBtn.addEventListener("click", () => {
      // Eliminar datos del localStorage y actualizar vista 
      // eliminamos todos los registros almacenados en el localStorage
      localStorage.removeItem("registros");
      mostrarDatos();
    });