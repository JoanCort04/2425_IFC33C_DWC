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

// Repetir las partituras 50 veces
let repetides = [];
for (let i = 0; i < 50; i++) {
  repetides = repetides.concat(partitures);
}
partitures = repetides;

window.onload = function crearTaules() {
  let cos = document.getElementsByTagName("body")[0];

  let contenidor = document.createElement("div");
  contenidor.className = "taula";

  let taula = document.createElement("table");

let colgroup = document.createElement("colgroup");
colgroup.innerHTML = `
  <col style="width: 40%;"> 
  <col style="width: 20%;"> 
  <col style="width: 40%;"> 
`;
taula.appendChild(colgroup);

let capçalera = document.createElement("tr");
capçalera.innerHTML = `
  <th>Títol</th>
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
          <button class="boto1 action-btn fa-solid fa-pen-to-square" onclick="editar(${index})"> Editar</button>
          <button class="boto2 action-btn fa-solid fa-trash" onclick="esborrar(${index})"> Esborrar</button>
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
  const width = 400;
  const height = 400;

  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  
  window.open(
    "../anterior/login.html",
    "_blank",
    `width=${width},height=${height},top=${top},left=${left}`
  );
}
