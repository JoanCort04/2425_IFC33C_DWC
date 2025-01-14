/* Ejercicio 1: Fases de la propagación de eventos
Crea un documento HTML con tres elementos anidados: un div, un section y un button.
Utiliza JavaScript para agregar manejadores de eventos a cada uno de ellos. Estos
manejadores deben mostrar un mensaje en la consola con el nombre del elemento y la fase
en la que se encuentra (captura o burbuja).
Investiga y responde:
1. ¿En qué orden se ejecutan los eventos en la fase de captura?
2. ¿Qué sucede si detienes la propagación de eventos con stopPropagation()?
3. ¿Cómo afecta la fase de burbuja al comportamiento general? */

window.onload = function eventos(){
    let div = document.getElementById("div");
    let section = document.getElementById("section");
    let button = document.getElementById("button");

    
        div.addEventListener("click", ()=>{console.log("div - Captura")}, true)
        div.addEventListener("click", ()=>{console.log("div - Burbuja")}, false)


        div.addEventListener("click", ()=>{console.log("div - Captura")}, true)
        div.addEventListener("click", ()=>{console.log("div - Burbuja")}, false)

        section.addEventListener("click", ()=>{console.log("section - Captura")}, true)
        section.addEventListener("click", ()=>{console.log("section - Burbuja")}, false)

        button.addEventListener("click", ()=>{console.log("button - Captura")}, true)
        button.addEventListener("click", ()=>{console.log("button - Burbuja")}, false)

}