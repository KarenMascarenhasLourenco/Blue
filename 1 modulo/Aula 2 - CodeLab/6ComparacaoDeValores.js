//Autora: Karen Mascarenhas Lourenço
//Exercício 6 - Aula 2 - Codelab - 17/08/2021

/*Exercício 6 - Elabore um programa que recebe dois valores inteiros e mostra se o primeiro valor 
é maior ou igual ao segundo valor
Exemplo:
Primeiro valor = 3
Segundo valor = 2
Resultado = True*/

    let  valor1 = prompt("Digite a primeira nota ");
	let valor1Inteiro=parseInt(valor1);
	let  valor2 = prompt("Digite a segunda nota: ");
	let valor2Inteiro =parseInt(valor2);

	if (valor1Inteiro === valor2Inteiro) {
	    console.log("O primeiro valor é igual ao segundo");
	}else if (valor1Inteiro >= valor2Inteiro){
	    console.log("O primeiro valor é maior que o segundo");
	}else{
	    console.log("O primeiro valor é menor que o segundo");
	}
