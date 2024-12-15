let personaJaume = {
  nombre: "Jaume",
  edat: "15",
};

const personaRandom = {
  nombre: "Pepito",

  saludar: function() {
    console.log(`holoi, ${this.nombre}`);
  }
};

personaRandom.saludar();

function Persona(nombre) {
  this.nombre = nombre;
}

const  james = new Persona("James");
console.log(james.nombre); 

function saludar(saludació) {
    return `${saludació}, ${this.nombre}`;
}

console.log(saludar.call(personaJaume, "hola"));
console.log(saludar.apply(personaJaume, ["hola"]));

let saludarSempreAlMateix = saludar.bind(personaJaume);
console.log(saludarSempreAlMateix("adeu"));

