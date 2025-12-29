import { config } from 'dotenv';
import env from 'env-var';


// const {obtenerLibro} = require('../function-object/function')
// const { libro } = require('../function-object/objects')

//console.log("Hola Mundo desde src/app")
// const {nombre, autor} = libro
// console.log(obtenerLibro(nombre, autor))

//console.log(process.env)

//port = process.env.PORT || 6000
config()

const PORT = env.get('PORT').required().asPortNumber()
//console.log(process.env.PORT) 
console.log(PORT) 