const express = require("express");
const path = require("path") ;


const startServer = (options) => {
  const { port, public_path = "public" } = options;
  console.log(port);
  console.log(public_path);

  const app = express();

  app.use(express.static(public_path));

  app.get("*", (req, res) => {
    const indexPath = path.join(__dirname, `../../${public_path}/index.html`);
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Escuchando el puerto local: ${port}`);
  });
};

module.exports = {
    startServer
}