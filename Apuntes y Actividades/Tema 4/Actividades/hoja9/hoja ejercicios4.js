/* Ejercicio 1/
CLICK

Hacer clic en un botón (por ejemplo, un botón de enviar en un formulario).
Hacer clic en un enlace.
Hacer clic en un checkbox o radio button.

FOCUS 

Hacer clic en un campo de texto para escribir en él.
Navegar a un campo de texto mediante el teclado (como usar la tecla Tab).
Hacer clic en un select para seleccionar una opción.

KEYPRESS

Escribir caracteres en un campo de texto.
Escribir en un área de texto (textarea).
Usar teclas en un campo de entrada.


/* Ejercicio 2: Agregar un evento básico a un botón
Escribe un código HTML simple con un botón y utiliza el atributo onclick para mostrar un
mensaje de alerta cuando el botón sea presionado.
Ejemplo inicial:
<button onclick="alert('¡Has hecho clic!')">Presióname</button>
Cambia el texto del botón después de hacer clic utilizando una segunda alerta, como:
alert('El texto del botón cambiará');
this.innerText = '¡Texto cambiado!’; */
window.onload  = () => {
 button();

    let button1 = document.createElement('button');
    document.body.appendChild(button1);

    button1.addEventListener('click', function() {
        alert('¡Has hecho clic!');
      
      
        alert('El texto del botón cambiará');

        button.innerText = '¡Texto cambiado!';

       
}
)
}

/* 
Ejercicio 3: Explorar eventos mediante el inspector del navegador
Usa el inspector del navegador para observar eventos en tiempo real:
1. Abre el navegador.
2. Ve a una página web (por ejemplo, un formulario de contacto simple).
3. En el inspector, selecciona la pestaña "Event Listeners" o utiliza el registro en
consola con:
document.addEventListener('click', (event) => {
console.log(`Tipo de evento: ${event.type}`);
});
Explica qué acciones generan un click, focus, o keypress.


en resumen, las mismas acciones que las del ejecicio 1. la terminal del inspector de elementos lo muestra claramente 
CLICK

document.addEventListener('click', (event) => {
console.log(`Tipo de evento: ${event.type}`);
});

Hacer clic en un botón (por ejemplo, un botón de enviar en un formulario).
Hacer clic en un enlace.
Hacer clic en un checkbox o radio button.

FOCUS 

document.addEventListener('focus', (event) => {
console.log(`Tipo de evento: ${event.type}`);
});

Hacer clic en un campo de texto para escribir en él.
Navegar a un campo de texto mediante el teclado (como usar la tecla Tab).
Hacer clic en un select para seleccionar una opción.

KEYPRESS

document.addEventListener('keypress', (event) => {
console.log(`Tipo de evento: ${event.type}`);
});

Escribir caracteres en un campo de texto.
Escribir en un área de texto (textarea).
Usar teclas en un campo de entrada.

Ejercicio 4: Encontrar los nombres únicos
Escribe un programa que cuente cuántas veces se hace clic en un botón y muestre el total
en la página.
Plantilla inicial:
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contador de clics</title>
</head>
<body>
<button onclick="incrementar()">Haz clic aquí</button>
<p>Has hecho clic <span id="contador">0</span> veces.</p>
<script>
let contador = 0;
function incrementar() {
contador++;
document.getElementById('contador').innerText = contador;
}
</script>
</body>
</html>
Agregar otro botón para reiniciar el contadOR */

function button() {
    let button2 = document.createElement('button');
    button2.innerText = "Resetear Contador";  
    document.body.appendChild(button2); 



    // Agregamos el evento click al botón
    button2.addEventListener('click', function() {
      // Seleccionamos el elemento con id 'contador' y lo actualizamos
      let contadorElement = document.querySelector('#contador');
      contadorElement.innerText = 0;  // Establecemos el valor del contador a 0
    });
  }