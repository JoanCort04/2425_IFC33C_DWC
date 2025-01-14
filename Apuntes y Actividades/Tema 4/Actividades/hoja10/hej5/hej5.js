document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM(){
    let contenedor = document.getElementById("contenedor");
    let seccion = document.getElementById("section");
    let boton = document.getElementById("button");
    
    contenedor.addEventListener("click", ()=>{
        console.log("div - captura")
    }, true)

    seccion.addEventListener("click", ()=>{
        console.log("section - captura")
    }, true)

    boton.addEventListener("click", ()=>{
        console.log("buton - captura")
    }, true)
}

