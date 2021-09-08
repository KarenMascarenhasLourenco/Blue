//Autora: Karen Mascarenhas Lourenço
//Exercício 11 - Lista de Fixação - Modulo 1 - 18/08/2021

/*11.	Calculadora de aumento de aluguel 
A sua calculadora vai receber o valor do aluguel e calcular o aumento baseado no IGPM de 31%.
A calculadora deve apresentar o aluguel reajustado no formato R$9999.99

Exemplo:
Valor do aluguel = 1000
Valor do aluguel reajustado = R$ 1310,00*/

let valorAluguel = +prompt("Qual o valor do aluguel?");
    console.log("o valor reajustado do aluguel é: R$"+(valorAluguel*1.31).toFixed(2));
