function Marca(marca) {
  this.nom = marca;
}

function Modelo(modelo, marca) {
  this.modelo = modelo;
  this.marca = marca;
}

// Create brand instances
var ford = new Marca("FORD");
var citroen = new Marca("CITROEN");
var seat = new Marca("SEAT");

// Create model instances associated with their respective brands
var ffocus = new Modelo("Focus", ford);
var fiesta = new Modelo("Fiesta", ford);
var saxo = new Modelo("Saxo", citroen);
var c4 = new Modelo("C4", citroen);

var coches = [ffocus, fiesta, saxo, c4];

var div = document.querySelector("#app");
var table = document.createElement("TABLE");
table.id = "coches";

var thead = document.createElement("thead");
table.appendChild(thead);

var tr = document.createElement("tr");
thead.appendChild(tr);

var cabeceras = ["MARCA", "MODELO"];
var th;

for (let cabecera of cabeceras) {
  th = document.createElement("th");
  th.innerText = cabecera;
  tr.appendChild(th);
}

var tbody = document.createElement("tbody");
table.appendChild(tbody);

for (let coche of coches) {
    tr = document.createElement("tr");
    tbody.appendChild(tr);
  
    for (let propiedad in coche) {
      td = document.createElement("td");
  
      if (propiedad === "marca") {
        td.innerText = coche[propiedad].nom; 
      } else {
        td.innerText = coche[propiedad]; 
      }
  
      tr.appendChild(td);
    }
  }
  
  div.appendChild(table);
  console.log(table);
  