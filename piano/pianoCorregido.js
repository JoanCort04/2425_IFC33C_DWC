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
]