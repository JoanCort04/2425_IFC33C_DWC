document.addEventListener("DOMContentLoaded", cargaDOM); //cuando ponemos el script en la cabezera, el html cuando se carga en l naevgador lo va cargando linia por lina.
// todo lo que se haga en el cargaDOM se ejecutará cuando el dom esté cargado xd, AHORRANDO problemas

function cargaDOM(){
    let listaLi= document.querySelectorAll("li");

    listaLi.forEach((li) => {
        li.addEventListener("click", addListener)
        })
    
    let boton= document.getElementById("boton");
    boton.addEventListener("click", addButton);

}
    function addButton(){ 
        let ul = document.querySelector("ul");
        let nuevaTarea = document.createElement("li");
        nuevaTarea.innerHTML = `Tarea ${ul.children.length + 1}`;
        nuevaTarea.addEventListener("click", addListener)
        ul.appendChild(nuevaTarea);
    }

function addListener(e){
    if (e.target.tagName === "LI"){
        alert(`Seleccionaste ${e.target.textContent}`)
    }
}
