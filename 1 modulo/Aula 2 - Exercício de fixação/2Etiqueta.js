//Autora: Karen Mascarenhas Lourenço
//Exercício 2 - Lista de Fixação - Modulo 1 - 18/08/2021

/*Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, 
seu endereço na segunda, o CEP na terceira e o telefone na quarta.*/

const prompt = require("prompt-sync")();
const nomeCompleto = prompt("Digite o seu nome completo");
const endereco = prompt("Digite seu endereço");
const cep = prompt("Digite seu CEP");
const telefone = prompt("Digite seu telefone");

console.log(nomeCompleto);
console.log(endereco);
console.log(cep);
console.log(telefone);
