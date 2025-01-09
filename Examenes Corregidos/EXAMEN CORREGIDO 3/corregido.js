let multiplicar = (a,b) => {
    let resultat = a*b;
}

let numeros = [1,23,4,5] 

function cuadradoArray(array){
    let arrayCuadrados = [];
    array.forEach((numero) => {
    let cuadrados = numero*numero;
    arrayCuadrados.push(cuadrados);
    }   
)
    return arrayCuadrados;
};

class Monstruo {
  constructor(vida, ataque, defensa) {
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.formula = function () {
      return `${this.vida}`;
    };
  }
}

let pikachu2 = new Monstruo(1, 1, 1);

let variable = pikachu2.formula()
console.log(variable)

/* If you call pikachu2.formula(), the function is called as a method of pikachu2, so this refers to pikachu2.
If you call mensaje() (after assigning the method to mensaje), the function is called without an object context, so this is not bound to pikachu2 anymore. */

/*When you write const mensaje = pikachu2.formula;, you are taking the function (without calling it) and storing it in the variable mensaje. At this point, the connection to pikachu2 is lost.
When mensaje() is called, there is no information about pikachu2 anymore, so this inside formula defaults to the global context (window or global) or is undefined in strict mode.*/

console.log(pikachu2.formula);
console.log(pikachu2.formula()); 

/* pikachu2.formula: Refers to the function itself (without executing it).
pikachu2.formula(): Calls the function, executing its code and returning its result.*/

let anchoPantalla = screen.width();

if (anchoPantalla <= 768){
    window.open();
} else {
    window.open();
}