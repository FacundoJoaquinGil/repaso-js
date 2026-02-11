const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const nombreSeguro = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
    cb(null, nombreSeguro);
  }
});

const fileFilter = (req, file, cb) => {
  const tiposPermitidos = ["image/jpeg", "image/png"];
  if (tiposPermitidos.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Formato de imagen no permitido"), false);
  }
};

const uploadProfile = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 // 1 mega
  }
});

module.exports = uploadProfile;
