let tipos = ["Hearts", "Clubs", "Spades", "Diamonds"];
let numeros = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10];
let baraja = [];

function Carta(tipo, numero) {
    this.tipo = tipo;
    this.numero = numero;
}

function generarBaraja() {
    for (let tipo of tipos) {
        for (let num of numeros) {
            baraja.push(new Carta(tipo, num));
        }
    }
    return baraja;
}

generarBaraja();

let barajaRepartida = [];

function repartirBaraja(baraja) {
    let copiaBaraja = [...baraja];

    for (let i = 0; i < 6; i++) {
        let numeroAleatorio = Math.floor(Math.random() * copiaBaraja.length);
        let carta = copiaBaraja.splice(numeroAleatorio, 1)[0];
        barajaRepartida.push(carta);
    }
    return barajaRepartida;
}

repartirBaraja(baraja);

function cssCarta(carta) {
    let tipoLower = carta.tipo.toLowerCase();
    let numero = carta.numero;
    return `${numero}_of_${tipoLower}.png`;
}

function mostrarCartas() {
    const cardsContainer = document.getElementById("cardsContainer");

    cardsContainer.innerHTML = "";

    barajaRepartida.forEach((carta) => {
        const img = document.createElement("img");
        img.src = `../poker/cards/${cssCarta(carta)}`;
        img.alt = `${carta.numero} of ${carta.tipo}`;
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.appendChild(img);
        cardsContainer.appendChild(cardDiv);
    });
}

function comprobarPareja() {
    let counts = {};

    for (let carta of barajaRepartida) {
        if (counts[carta.numero]) {
            counts[carta.numero]++;
        } else {
            counts[carta.numero] = 1;
        }
    }

    for (let num in counts) {
        if (counts[num] === 2) {
            return true;
        }
    }
    return false;
}

function jugar() {

    barajaRepartida = [];
    repartirBaraja(baraja);
    mostrarCartas();

    if (comprobarPareja()) {
        alert("¡Has ganado! Tienes una pareja.");
    } else {
        alert("Sigue jugando. No tienes una pareja.");
    }
}

function reiniciar() {
    barajaRepartida = [];
    mostrarCartas();
    alert("El juego ha sido reiniciado.");
}

function ganar() {
    alert("¡Has ganado inmediatamente! Tienes una pareja.");
}

document.querySelector(".play").addEventListener("click", jugar);
document.querySelector(".reset").addEventListener("click", reiniciar);
document.querySelector(".win").addEventListener("click", ganar);
