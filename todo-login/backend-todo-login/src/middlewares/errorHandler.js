const multer = require("multer");

const errorHandler = (err, req, res, next) => {

  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "La imagen no puede superar 1 MB."
      });
    }
  }

  return res.status(500).json({
    success: false,
    message: "Error del servidor"
  });

};

module.exports = { errorHandler };
