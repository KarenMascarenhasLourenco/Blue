//Autora: Karen Mascarenhas Lourenço
//Exercício 5 - Lista de Fixação - Modulo 1 - 18/08/2021


/*5.	Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa 
escolha umas das opções, exibindo qual foi a opção escolhida.*/

console.log ("     MENU");
let opcaoEscolhida = +prompt ("1- Cadastrar Cliente\n2- Editar Cadastro\n3- Sair do Menu\n" );


if(opcaoEscolhida === 1){
    console.log("Você escolheu Cadastrar Cliente");
}else if (opcaoEscolhida === 2){
    console.log("Você escolheu Editar Cadastro");
}else{
    console.log("Você escolheu sair do Menu");
}
