// middlewares/errorHandler.js
const multer = require("multer");

function errorHandler(err, req, res, next) {
  console.error(err); // útil mientras aprendes

  // Errores de multer (por ejemplo LIMIT_FILE_SIZE)
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "La imagen no puede superar 1 MB."
      });
    }

    // otros códigos de multer (LIMIT_UNEXPECTED_FILE, etc.)
    return res.status(400).json({
      success: false,
      message: err.message || "Error en la subida de archivos."
    });
  }

  // Nuestro error personalizado (por ejemplo: falta de archivo)
  if (err && err.message === "NO_FILE") {
    return res.status(400).json({
      success: false,
      message: "Debe subir una imagen."
    });
  }

  // Fallback: otros errores
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Error del servidor"
  });
}

module.exports = errorHandler;
