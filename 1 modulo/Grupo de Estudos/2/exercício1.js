/*1.	Exercício – Treino: Crie uma função que dado dois valores (passados como parâmetros) 
mostre no console a soma, subtração, multiplicação e divisão desses valores.*/

const prompt = require("prompt-sync")();

const operacao = function (a, b) {
    console.log(`a soma de ${a} com ${b} é:` + (a+b));
    console.log(`a subtração de ${a} com ${b}:` + (a-b));
    console.log(`a multiplicação de ${a} com ${b}:` + (a*b));
    console.log(`a divisão de ${a} com ${b}: ` +(a/b));
}
operacao(2,1);