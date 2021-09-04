//Autora: Karen Mascarenhas Lourenço
//Exercício 9 - Lista de Fixação - Modulo 1 - 18/08/2021

/*9.	Você está na flor da idade

Defina uma variável para o valor do ano do nascimento;
Defina uma variável para o valor do ano atual;
Defina uma variável que calcula o valor final da idade da pessoa;
Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".*/

let anoNascimento = +prompt("Qual é o seu ano de nascimento?");
let anoAtual = +prompt("Qual é o ano atual?");
let idade = anoAtual - anoNascimento;

    console.log("Sua idade é "+ idade +"\n Você está na flor da idade");
