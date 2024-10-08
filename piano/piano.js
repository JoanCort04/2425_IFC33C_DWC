

let partitures = [
    {nom: "La Balanguera", notes: ["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"]},
    {nom: "Happy Birthday", notes:["DO", "DO", "RE", "DO", "FA", "MI", "DO", "DO", "RE", "DO", "SOL", "FA"]}
];

function Nota(nom, tipus) {
  this.nom = nom;
  this.tipus = tipus;
}

function AddCerca(nom, tipus) {
  let nota = new Nota(nom, tipus);
  cerca.push(nota);
}

function Cercador(cerca) {
  let llista = [];

  for (let i = 0; i < partitures.length; i++) {
    const nom = partitures[i].nom;
    const notes = partitures[i].notes;
    const cercaLength = cerca.length;

    let esNom_a_llista = false;

    for (let j = 0; j < llista.length; j++) {
      if (llista[j].nom === nom) {
        esNom_a_llista = true;
        break;
      }
    }

    if (esNom_a_llista) {
      continue;
    }

    for (let j = 0; j <= notes.length - cercaLength; j++) {
      let coinceidex = true;

      for (let k = 0; k < cercaLength; k++) {
        if (notes[j + k] !== cerca[k]) {
          coinceidex = false;
          break;
        }
      }
      if (coinceidex) {
        llista.push({ nom: nom });
        break;
      }
    }
  }
  if (llista.length == 0) {
    return "No s'ha pogut trobar la cancó desitjada";
  }

  let noms = [];

  for (let i = 0; i < llista.length; i++) {
    noms.push(llista[i].nom);
  }
  return "S'ha trobat les cançons: " + noms;
}

let cerca = ["DO", "RE"];
let result = Cercador(cerca);
console.log(result);