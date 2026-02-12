function requireImage(req, res, next) {
  if (!req.file) {

    const err = new Error("NO_FILE");
    err.status = 400;
    
    return next(err); // lo maneja el errorHandler
  }
  next();
}

module.exports = { requireImage };
