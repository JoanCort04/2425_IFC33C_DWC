/*Ejercicio 3: Generar una lista dinámica
Crea una lista HTML desde un array de elementos en JavaScript.
En el archivo JavaScript, crea un array de nombres o elementos.
Genera una lista <ul> con cada uno de los elementos del array y agrégala al DOM. */

window.onload = function crearLlista() {
  let elementos = ["Poma", "Platano", "Pinya", "Pera"];

  let ul = document.createElement("ul");
  for (let i = 0; i < elementos.length; i++) {
    let li = document.createElement("li");
    li.textContent = elementos[i]; 
    ul.appendChild(li); 
  }

  let div = document.getElementById("llista");
  div.appendChild(ul);
};
