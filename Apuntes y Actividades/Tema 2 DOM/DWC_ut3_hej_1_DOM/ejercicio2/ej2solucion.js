/* Cambia el color de fondo de todos los elementos de una clase específica en el HTML.
En el archivo HTML, crea varios <div> con una misma clase y asigna diferentes textos a
cada uno.
En el archivo JavaScript, selecciona todos los elementos de esa clase y cambia su color de
fondo*/

window.onload = function modificarDivs() {
  let div = document.querySelectorAll(".divs");

   for (var i = 0; i < div.length; i++) {
        div[i].style.backgroundColor="blue";
}};

