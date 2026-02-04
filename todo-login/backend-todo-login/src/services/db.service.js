const fs = require("fs")
const path = require("path");

const dbPath = path.join(__dirname, "../../db.json");

function leerDB (){
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data)
}

function escribirDB(data){
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))
}


module.exports = {
  leerDB, escribirDB
};