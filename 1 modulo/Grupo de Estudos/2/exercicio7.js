//7.	Faça um programa para imprimir a tabuada do 8.
const prompt = require("prompt-sync")();
numero = prompt("qual tabuada você deseja fazer?")
const tabuada = function(numero) {
for (var i = 0; i < 11; i++) {
console.log((numero*i));
}
}
tabuada(numero)