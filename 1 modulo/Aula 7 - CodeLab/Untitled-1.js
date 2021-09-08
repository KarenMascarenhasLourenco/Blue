//Autora: Karen Mascarenhas Lourenço
//Exercício 03 - Aula 07 - CodeLab - 24/08/2021

/*DESAFIO: Crie um script que pergunte 3 números ao usuário (usando for!), coloque em um array, 
depois exiba tal array.

Depois use um for para percorrer esse Array, e pergunte para o usuário o novo valor que ele quer 
colocar em cada posição. 
(Por exemplo: "Digite um novo valor para a posição 1", "Digite um novo valor para a posição 2", etc...). 
Substitua o valor na lista original, para o novo valor entrado pelo usuário.*/ 

let numero = []
for (var i= 0; i=3; i++){
    numero.push(prompt("Digite um número"));
}