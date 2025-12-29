 const fs = require("fs")

 const poema = fs.readFileSync("poema.txt", "UTF-8")

 console.log(poema)