/* 
Ejercicio 1: Ordenar y mostrar una lista estática
Crea un array de números y ordénalo en orden ascendente y descendente.
Luego, muestra los números en el DOM dentro de una lista <ul>.
Requisitos:
● Usa sort con una función flecha como callback para definir el criterio de orden.
● Recorre el array con forEach para crear los elementos <li> y añadirlos al DOM.
● Manipula el DOM sin utilizar eventos.
*/

arrayNumeros = [12, 2, 3, 20, 5, 6, 7];

listaEstatica = (array) => {
  let h1 = document.createElement("h1");
  h1.innerHTML = "Descendente";

    let ul = document.createElement("ul");

  array.sort((a, b) => a - b);

  array.forEach((element) => {
    let li = document.createElement("li"); 
    li.innerHTML = element;
    ul.appendChild(li);
  });

  array.sort((a, b) => b - a);
  array.forEach((element) => {
    let li = document.createElement("li"); 
    li.innerHTML = element;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
};

listaEstatica(arrayNumeros);

/*
Ejercicio 2: Crear una tabla dinámica de datos
*/
/*
Ejercicio 3: Mostrar propiedades del objeto window
*/
/*
Ejercicio 4: Crear una lista de tareas con estilos condicionales
*/
/*
Ejercicio 5: Crear un resumen dinámico de números
*/
/*
Ejercicio 6: Crear una tabla de multiplicar
*/

