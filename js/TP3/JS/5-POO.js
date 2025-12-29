class Persona {
    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    
    saludar() {
        return console.log(`Hola me llamo ${this.nombre}, tengo ${this.edad} años`)
    }

}

const joaquin = new Persona("Joaquin", 26);

joaquin.saludar();

