function Nota(nota, tipus) {
    this.nota = nota;
    this.tipus = tipus;
}

let cerca = [];

function addCerca(nota, tipus, cerca) {
    cerca.push(new Nota(nota, tipus));
}

addCerca("Do", "", cerca);
addCerca("Re", "", cerca);

function Partitura(nombre, melodia){
    this.nombre = nombre;
    this.melodia = melodia;
}

melodiaBalanguera = [
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
];

PartituraLaBalaguera = new Partitura("La Balaguera", melodiaBalanguera);

melodiaHappyBirthday = [
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
];

PartituraHappyBirthday = new Partitura("Happy Birthday", melodiaHappyBirthday);

let partituras = []
partituras.push(PartituraLaBalaguera); partituras.push(PartituraHappyBirthday);
console.log(partituras);

/*
function cercador(partituras, cerca) {
    let resultado = [];

    for (let i = 0; i < partituras.length; i++) { 
        for (let j = 0; j <= partituras[i].melodia.length - cerca.length; j++) {
            let trobat = true;

            for (let k = 0; k < cerca.length; k++) {
                if (partituras[i].melodia[j + k] === undefined
                    || partituras[i].melodia[j + k].nota !== cerca[k].nota
                    || partituras[i].melodia[j + k].tipus !== cerca[k].tipus) {
                    trobat = false;
                    break; 
                }
            }

            if (trobat) {
                resultado.push(partituras[i]);
                break; 
            }
        }
    }

    return resultado;
}
    */

  function cercador(partituras, cerca) {
    for (let i = 0; i<= (partituras.length - cerca.length); i++){
        let trobat = 1;
    }
    for (let j = 0; j<cerca.length; j++){
        if (partituras[i+j].melodia.nota !== cerca[j].nota
            || partituras[i+j].melodia.tipus !== cerca[j].tipus
        ){
            trobat = false;
            break;
        }

        if (trobat) {
            resultat.push(partituras[i]);
        }
        }
        
    }
  