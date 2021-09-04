//Autora: Karen Mascarenhas Lourenço
//Exercício 4 - Lista de Fixação - Modulo 1 - 18/08/2021

/*4.	Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos.
Como primeiro passo, escreva um programa que produza a seguinte saída:

ALUNO (A)  NOTA
=========  ====
ALINE            9.0
MÁRIO          DEZ
SÉRGIO         4.5
SHIRLEY      7.0*/
const prompt = require('prompt-sync')();

let nome1 = prompt("Nome do estudante");
let nota1 = +prompt("Nota do estudante "+ nome1);
let nota2 = prompt("\n\nNome do estudante");
let nota2 = +prompt("Nota do estudante "+ nota2);
let nome3 = prompt("\n\nNome do estudante");
let nota3 = +prompt("Nota do estudante " + nome3);
let nome4 = prompt("\n\nNome do estudante");
let nota4 = +prompt("Nota do estudante " + nome4)

console.log("Aluno(a)           Nota");
console.log("=======            ====");
console.log(nome1 + "              " + nota1);
console.log(nota2 + "              " + nota2);
console.log(nome3 + "              " + nota3);
console.log(nome4 + "              " + nota4);
