const os = require('node:os')

console.log(os.platform())
console.log(os.release())
console.log(os.cpus())
console.log(os.arch())
console.log("Memoria Libre", os.freemem() / 1024 / 1024)
console.log("Memoria Total", os.totalmem() / 1024 / 1024)
console.log("uptime", (os.uptime() / 60 / 60)) 
