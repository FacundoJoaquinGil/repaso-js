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

// joaquin.saludar();

class Estudiante extends Persona{

    curso;

    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    saludar(){
        return console.log(`Hola me llamo ${this.nombre}, tengo ${this.edad} años y curso ${this.curso}`)
    }
}

const estudiante1 = new Estudiante("Facundo", 26, "Programacion en el SPT")

estudiante1.saludar()
