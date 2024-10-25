let tipos = ["Corazón", "Trébol", "Picas", "Diamantes"];
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let baraja = [];

function Carta(tipo, numero) {
    this.tipo = tipo;
    this.numero = numero;
}

function generarBaraja() {
    for (tipo of tipos) {
        for (num of numero) {
            baraja.push(new Carta(tipo, num));
        }
    }
    return baraja;
}

generarBaraja();

barajaRepartida = [];
function repartirBaraja(baraja) {
    console.log(" Baraja Repartida: ");

    for (let i = 0; i < 6; i++) {
        let numeroAleatorio = Math.floor(Math.random() * baraja.length);

        if (!barajaRepartida.includes(baraja[numeroAleatorio])) {
            barajaRepartida.push(baraja[numeroAleatorio]);
        }
    }
    return barajaRepartida;
}

repartirBaraja(baraja);

function recorrerBaraja() {
    for (carta of barajaRepartida) {
        console.log(carta);
    }
}

recorrerBaraja();
