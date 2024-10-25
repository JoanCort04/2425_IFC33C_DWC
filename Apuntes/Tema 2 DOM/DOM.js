var v1 = document.getElementById("mujer");
console.log(V1);

var v2 = document.getElementsByTagName("input");
console.log(v2);

var v3 = document.getElementsByTagName("body");
console.log(v3);
console.log(v3[0]); /* trabajar con el array de body */
console.log(v3[0].childNodes);
console.log(v3[0].children);


var v4 = document.getElementsByClassName("sexo");
console.log(v4);

var v5 = document.getElementById("sexo");
console.log(v5);

var v6 = document.getRootNode();
console.log(v6);

var v7 = document.querySelector("#mujer");
var v8 = document.querySelectorAll(".sexo");

var v9 = document.createElement("h2");
v9.innerHTML = 'Hola <span style="color: red;">mundo</span>';

document.body.appendChild(v9);
