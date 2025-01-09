/*Crea una función a la que se le pasen dos  textos (sólo letras y espacios) y detecte si los mismos son anagramas o no. 
Un anagrama es una palabra que resulta de trasponer las letras de otra palabra. Por ejemplo: ESTANCO y ACENTOS son anagramas.
La función debe devolver verdadero si ambas palabras son anagramas.

Para realizar este ejercicio, será necesario escoger una estructura de datos y utilizar tanto los bucles como las funciones propias de dicha estructura de datos dadas en clase.
*/
let texto1 ="AMOR";
let texto2 ="ROMA";


function ComprobarAnagramas(texto1, texto2) {
    let resultado = false; // EN JAVASCRIPT, HASTA QUE NO ASIGNAS UN VALOR NO SABE QUE ES UNDEFINED. 

    texto1 = texto1.split("").sort().join(""); // LOS SEPARA Y LOS UNE POR ORDEN DEL ABECEDARIO, SALE LA MISMA PALABRA. 
    console.log(texto1);
    texto2 = texto2.split("").sort().join("");
    console.log(texto2);
    
    if (texto1 === texto2) {
        resultado = true;
    }
    return resultado;
}

console.log(ComprobarAnagramas(texto1, texto2));