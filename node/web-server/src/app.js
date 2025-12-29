const { envs } = require('./config/env');
const { startServer } = require('./server/server');

const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Funcion agnostica y autoconvocada
//Agnostica porque no tiene nombre
//Autoconvocada porque ejecutamos los parentesis al final que la llaman a si misma
(async () =>{
    main()
})()