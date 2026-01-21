const fs = require("fs");
const path = require("path");

const db = path.join(__dirname, "db.json");

function leerDB(){
    const data = readFileSystem(db, "utf-8")
    return JSON.parse(data)
}

module.exports = { leerDB }