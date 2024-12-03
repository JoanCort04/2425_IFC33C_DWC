// Ejercicio 1: Imprime el valor de `this` en el contexto global.
console.log(this);
// Salida: 

console.log('---');

// Ejercicio 2: Crea un objeto con un método y usa `this` para acceder a una propiedad del objeto.
let obj1 = {
    nombre: 'Pepe',
    saludar() {
        console.log(`Hola, ${this.nombre}!`);
    }
};
obj1.saludar();
// Salida: 


console.log('---');

// Ejercicio 3: Analiza el valor de `this` en una función normal dentro de un método.
let obj2 = {
    nombre: 'Paco',
    saludar() {
        function interna() {
            console.log(this.nombre); // ¿Qué imprime esto?
        }
        interna();
    }
};
obj2.saludar();
// Salida:


console.log('---');

// Ejercicio 4: Usa una función flecha para heredar el contexto de `this`.
let obj3 = {
    nombre: 'Carlitos',
    saludar() {
        let interna = () => {
            console.log(this.nombre);
        };
        interna();
    }
};
obj3.saludar();
// Salida: 

console.log('---');

// Ejercicio 5: Usa `call` y `apply` para cambiar el contexto de `this`.


// saludar("Hola");

/* let persona1 = {
    nombre: "Ana",
    saludar: function (saludo) {
        console.log(`${saludo}, ${this.nombre}`);
    }
} 
persona1.saludar("Hola");    
*/

function saludar(saludo) {
    console.log(`${saludo}, ${this.nombre}`);
}

let persona1 = { nombre: 'Ana' };

saludar("Hola");

saludar.call(persona1, 'Hola');  
saludar.apply(persona1, ['Uep!']);
// nombreFuncion.call(contextoACoger, "parámetro de nombreFuncion")
// Salida:

console.log('---');

// Ejercicio 6: Usa `bind` para crear una nueva función con un `this` fijo.
function presentacion() {
    console.log(`Soy ${this.nombre}`);
}

let persona2 = { nombre: 'Belén' };
let funcionBind = presentacion.bind(persona2);

funcionBind();
// Salida: 

console.log('---');

// Ejercicio 7: Usa `this` dentro de un constructor para asignar propiedades.
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.describir = function() {
        console.log(`${this.nombre} tiene ${this.edad} años.`);
    };
}
let juan = new Persona('Juan', 30);
juan.describir();
// Salida: 

console.log('---');

// Ejercicio 8: Usa `this` dentro de un controlador de eventos.
let boton = document.createElement('button');
boton.textContent = 'Click me';
document.body.appendChild(boton);

boton.addEventListener('click', function() {
    console.log(this); // ¿Qué es `this` aquí?
});
// Salida: 

console.log('---');

// Ejercicio 9: Soluciona el problema del `this` cuando pasas un método como callback.
let obj4 = {
    nombre: 'Frank',
    saludar() {
        console.log(this.nombre);
    }
};

setTimeout(obj4.saludar, 1000); // ¿Qué ocurre aquí?
// Solución: 
setTimeout(obj4.saludar.bind(obj4), 1000);
// Salida: 

console.log('---');


// Ejercicio 10: Usa `this` dentro de una clase.
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hablar() {
        console.log(`${this.nombre} hace ruidos.`);
    }
}
let milu = new Animal('Milu');
milu.hablar();
// Salida: 
