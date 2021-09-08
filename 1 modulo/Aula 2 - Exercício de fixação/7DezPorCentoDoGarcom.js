//Autora: Karen Mascarenhas Lourenço
//Exercício 7 - Lista de Fixação - Modulo 1 - 18/08/2021


//E os 10% do garçom?
//Defina uma variável para o valor de uma refeição que custou R$ 42,54;
//Defina uma variável para o valor da taxa de serviço que é de 10%;
//Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

let refeicao = 42.54;
let taxaServico = 0.1;
let valorTotal = (refeicao + refeicao* taxaServico);

    console.log("O valor total é R$"+ valorTotal.toFixed(2));
