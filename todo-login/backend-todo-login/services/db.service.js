const fs = require("fs")
const path = require("path");

const dbPath = path.join(__dirname, "../db.json");

function leerDB (){
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data)
}

module.exports = {
  leerDB
};