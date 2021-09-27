/*11.	Faça um programa que cadastre nome, idade e sexo das pessoas. 
Toda vez que um cadastro é finalizado, o programa deve perguntar ao usuário se ele deseja 
cadastrar outra pessoa. O programa deve continuar em execução até que o usuário não queira 
mais realizar nenhum cadastro. No final o programa deve exibir quantos usuários de cada sexo foram cadastrados.*/
const prompt = require("prompt-sync")();
let listaDeNomes = []
console.log('Cadastro de pessoas');
let sair =0
do{
  let controlador=0
  nome = prompt('Qual é o nome a ser cadastrado?')
  idade = prompt('Qual é a idade da pessoa?')
  do{
  genero = prompt('Qual é o gênero da pessoa?').toUpperCase().slice(0,1)
  if(genero == 'F'){
    controlador++
  }else if (genero == 'M'){
    controlador++
  }else{
    console.log('Valor inválido tente novamente')
  }
  } while(controlador!=1)
listaDeNomes.push({nome: nome, idade:idade, genero:genero})
sair = prompt('Deseja sair?').toUpperCase().slice(0,1)
 if(sair == 'S'){
   sair++
 }else{}
}while(sair == 0)