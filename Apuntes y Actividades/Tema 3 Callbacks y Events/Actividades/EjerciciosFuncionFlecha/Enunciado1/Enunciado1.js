/* Ejercicio 1 
Ejercicio 1: Crear y agregar elementos al DOM
*/
crearP = () => {
  let p = document.createElement("p");

  p.innerHTML = "Este es un parrafo dinámico";

  document.body.appendChild(p);
}

/*
Ejercicio 2: Generar una lista dinámica
*/
let arrayNombres = ["Joan", "Pepito", "Jaimito"];

let crearListaDesordenada = (arrayNombres) => {
  const ul = document.createElement("ul");

  arrayNombres.forEach((nombre) => {
    let li = document.createElement("li");
    li.innerHTML = nombre; 
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
};
/*
Ejercicio 3: Mostrar propiedades del objeto window
*/

mostrarPropietats = () =>{

    let p = document.createElement("p");
    p.innerHTML = `${window.innerHeight}, ${window.innerWidth}`;
    document.body.appendChild(p);
} 
/*
Ejercicio 4: Generar una tabla con datos estáticos
*/


let arrayPersonas = [
  { nombre: "Joan", edad: 19 },
  { nombre: "Pere", edad: 20 },
  { nombre: "Sebastià", edad: 21 }
];

const generarTabla = (arrayPersonas) => {
  let tabla = document.createElement("table");

  let encabezado = document.createElement("tr");
  Object.keys(arrayPersonas[0]).forEach(llave => {
    let th = document.createElement("th");
    th.innerHTML = llave;
    encabezado.appendChild(th);
  });
  tabla.appendChild(encabezado);

  arrayPersonas.forEach(persona => {
    let fila = document.createElement("tr");
    Object.values(persona).forEach(valor => {
      let td = document.createElement("td");
      td.textContent = valor;
      fila.appendChild(td);
    });
    tabla.appendChild(fila);
});


/*
Ejercicio 5: Contar palabras en un texto
*/
let text = "Hola Adeu Bones Nop";
contaParaules = (text) => {
    numParaules = text.split(" ").lenght;

    const p = document.createElement("p");
    p.textContent = `El text té ${numParaules} paraules.`;
    document.body.appendChild(p);
};
}
/*
Ejercicio 6: Crear una tabla de multiplicar
*/
/*
Ejercicio 7: Mostrar datos del navegador
*/
/*
Ejercicio 8: Crear un listado numérico
*/
/*
Ejercicio 9: Crear una lista de enlaces
*/
/*
Ejercicio 10: Calcular el promedio de un array
*/

