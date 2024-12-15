/* Visualización URL Actual */

function mostrarURLActual() {
  alert(window.location);
}

function irAtras() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    confirm("no");
  }
}

function irAdelante() {
  if (window.history.length > 1) {
    window.history.forward();
  } else {
    confirm("no");
  }
}

function mostrarInfoNavegador() {
  let message =
    "Utilitzant: " +
    window.navigator.userAgent +
    "\nAmb llenguatge: " +
    window.navigator.language +
    "\nEstat de connexió: " +
    window.navigator.onLine;
  confirm(message);
}

function redirigirURL() {
    url = document.getElementById("urlInput").value;
    window.location.assign(url);
}

var pagina;

function abrirPopup() {
  pagina = window.open(
    "https://paucasesnovescifp.cat",
    "popup",
    "width=600,height=400"
  );
}

function cerrarPopup() {
    pagina.window.close();
}

