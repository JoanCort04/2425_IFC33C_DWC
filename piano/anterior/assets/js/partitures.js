



 let partitures = [
  {
    nom: "La Balanguera",
    notes: ["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"],
    idioma: ["ca"],
  },
  {
    nom: "Happy Birthday",
    notes: [
      "DO",
      "DO",
      "RE",
      "DO",
      "FA",
      "MI",
      "DO",
      "DO",
      "RE",
      "DO",
      "SOL",
      "FA",
    ],
    idioma: ["en"],
  },
];
window.onload = function crearTaules() {
  let cos = document.getElementsByTagName("body")[0];

  let contenidor = document.createElement("div");
  contenidor.className = "taula";

  let taula = document.createElement("table");

  let capçalera = document.createElement("tr");
  capçalera.innerHTML = `
    <th>Titol</th>
    <th>Idioma Original</th>
    <th>Accions</th>
  `;
  taula.appendChild(capçalera);

  partitures.forEach((partitura, index) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${partitura.nom}</td>
        <td>${partitura.idioma.join(", ")}</td>
        <td>
            <button class="boto1" onclick="editar(${index})">Editar</button>
            <button class="boto1" onclick="esborrar(${index})">Esborrar</button>
        </td>
    `;
    taula.appendChild(fila);
  });

  contenidor.appendChild(taula);
  cos.appendChild(contenidor);
};

function esborrar(index) {
  if (
    confirm(`Està segur de que vols esborrar la partitura amb index ${index}?`)
  ) {
    
    let taula = document.querySelector(".taula table");
    let fila = taula.rows[index + 1];
    fila.parentNode.removeChild(fila);
    alert("Element esborrat");
  } else {
    alert("Has cancel·lat l'acció, la cançó no era tan dolenta, oi?");
  }
}

function iniciarSessio() {
  window.open("../anterior/login.html", "_blank", "width=200,height=100");
}
