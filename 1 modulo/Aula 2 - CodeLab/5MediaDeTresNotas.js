//Autora: Karen Mascarenhas Lourenço
//Exercício 5 - Aula 2 - Codelab - 17/08/2021

/*Exercício 5 - Elabore um programa que receba 3 notas de um aluno e calcule a média dele.
Exemplo:
Primeira nota = 7
Segunda nota = 8
Terceira nota = 10

Média = 7,75*/

    let  nota1 = prompt("Digite a primeira nota ");
	let nota1Float=parseFloat(nota1).toFixed(2);
	let  nota2 = prompt("Digite a segunda nota: ");
	let nota2Float =parseFloat(nota2).toFixed(2);
	let nota3 = prompt("Digite a terceira nota: ");
	let nota3Float= parseFloat(nota3).toFixed(2);
	
    console.log("A média é: "+ (nota1Float+nota2Float+nota3Float)/3);
