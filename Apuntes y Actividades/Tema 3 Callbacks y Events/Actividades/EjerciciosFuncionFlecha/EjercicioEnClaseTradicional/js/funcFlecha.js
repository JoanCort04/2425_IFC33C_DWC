/*
 * Ejercicio: Diferencias de `this` en funciones tradicionales y funciones flecha
 *
 * Crea un objeto llamado `usuario` con las siguientes propiedades y métodos:
 * 
*/
  let usuario = {
    nombre: "Carlos",

    saludarTradicional() {
      console.log(`Hola ${this.nombre}`);
    },

    myMethod: function () {
      console.log("Dentro de myMethod, this es:", this.nombre);
      
      this.saludarFlecha = () => {
        console.log(`Hola desde la función de flecha, this es: ${this.nombre}`);
      };
    },
  };

let usuario2 = {
  nombre: "Carlitos",
  
  saludarTradicional: function() {
    console.log(`Hola ${this.nombre}`);
  },
  saludarFlecha: () => {

    console.log(`Hola ${this.nombre}`);
  }
}


class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludarTradicional() {
    console.log(`Hola ${this.nombre}`);
  }
  saludarFlecha = () => {
    console.log(`Hola ${this.nombre}`);
  }
}

const Calrlitos  = new Usuario("Carlitos");
Calrlitos.saludarFlecha();
Calrlitos.saludarTradicional();


let usuario1 = new Usuario("Jaume");

usuario1.saludarFlecha(); 
usuario1.saludarTradicional(); 

usuario.saludarTradicional(); 

usuario.myMethod();
usuario.saludarFlecha();


let saludarExterno = usuario1.saludarTradicional.bind(usuario1);
saludarExterno();

let saludarFlechaExterno = usuario1.saludarFlecha;
saludarFlechaExterno(); 

usuario2.saludarTradicional(); 
usuario2.saludarFlecha();

//