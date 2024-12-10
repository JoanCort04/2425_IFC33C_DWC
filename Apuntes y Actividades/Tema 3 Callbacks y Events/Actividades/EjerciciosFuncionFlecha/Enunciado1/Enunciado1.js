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
  Object.keys(arrayPersonas[0]).forEach((llave) => {
    let th = document.createElement("th");
    th.innerHTML = llave;
    encabezado.appendChild(th);
  });
  tabla.appendChild(encabezado);

  arrayPersonas.forEach((persona) => {
    let fila = document.createElement("tr");
    Object.values(persona).forEach((valor) => {
      let td = document.createElement("td");
      td.textContent = valor;
      fila.appendChild(td);
    });
    tabla.appendChild(fila);
  });

  /*
Ejercicio 4.2 : Generar una tabla con datos estáticos
*/

class Persona {
  constructor(nom, edat) {
    this.nom  = nom;
    this.edat = edat;
  }
}
  let arrayPersonas2 = [
    new Persona("Jaume", 15), 
    new Persona("Pepito", 18), 
    new Persona("Toni", 20)
  ]



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
Ejercicio 7:: Mostrar datos del navegador
Crea un programa que muestre el nombre del navegador (navigator.userAgent) y el idioma
(navigator.language) en dos párrafos separados. Usa una función flecha para construir el
contenido
*/

mostrarNavNom = () => {
  let paragraf1 = document.createElement("p");
  paragraf1.innerHTML = navigator.userAgent;
  document.body.appendChild(paragraf1);


  let paragraf2 = document.createElement("p");
  paragraf2.innerHTML = navigator.language;
  document.body.appendChild(paragraf2);

}

mostrarNavNom();


/*
Ejercicio 8: Crear un listado numérico 
//no oblidar-se de dins el propi bucle fer el propi append. 
No oblidar-se d'inicialitzar el let i = 0;
*/
listadoNumerico = () => {
  
  let ol = document.createElement("ol");
  let li;

  for (let i = 1; i <= 10; i++) {
    li = document.createElement("li");
    li.innerHTML = i;
    ol.appendChild(li);
  }
  
  document.body.appendChild(ol);

}
listadoNumerico();

/*
Ejercicio 9: Crear una lista de enlaces
*/

class Enlace{
  constructor(nombre, URL){
    this.nombre = nombre,
    this.URL = URL;
  }
}

arrayEnlaces = [
  new Enlace("Google", "www.google.com"),
  new Enlace("Bing", "www.bing.com"),
  new Enlace("Duckduckgo", "www.duckduckgo.com")
];

  listaEnlaces = (arrayEnlaces) => {
    let ul = document.createElement("ul");
   
    
    arrayEnlaces.forEach(element => {
      let li = document.createElement("li");
      let a = document.createElement("a");

      a.href = element.URL;
      a.innerHTML = element.nombre;
      a.target = "_blank";

      li.appendChild(a);
      ul.appendChild(li);
      
    });
    document.body.appendChild(ul);

};
listaEnlaces(arrayEnlaces);


/*
Ejercicio 10: Calcular el promedio de un array, se pot fer amb array reduce també
*/

let numeros = [10, 20, 30, 40, 50];
let suma = 0; 

let calcularPromedio = (array) => {
  array.forEach((numero) => {
    suma += numero; 
  });

  return suma / array.length;
};

let promedio = calcularPromedio(numeros);

let parrafo = document.createElement("p");
parrafo.innerHTML = `El promedio es: ${promedio}`;
document.body.appendChild(parrafo);



let promedio2 = numeros.reduce((acumulador, valorActual) => {
  acumulador += valorActual;
  return acumulador;}, 0) / numeros.length;

console.log(promedio2); 

