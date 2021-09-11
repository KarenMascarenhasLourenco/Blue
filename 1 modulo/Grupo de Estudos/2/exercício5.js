/*5.A ideia deste exercício é criar uma função que calcula a quantidade mínima de passos que o Master Bluemer
 precisa dar para atravessar uma rua xpto.
O Master Bluemer, da turma C008, deseja atravessar uma rua xpto. Inicialmente, o MB está localizado em uma 
posição X, e deseja chegar a uma posição maior ou igual a Y. A cada passo que o MB dá, ele percorre uma 
distância fixa Z. Nossa função deve:
•	Contar a quantidade mínima de passos que o MB precisa dar para atravessar a rua, ou seja, sair da 
posição X e chegar ou ultrapassar à posição Y;
•	Possuir 3 parâmetros (3 números inteiros X, Y e Z);
•	Retornar um número mínimo de passos que inicie da posição X e vá para uma posição maior ou igual a Y.
*Exemplo de saída do programa*
Dando como exemplo os números de entrada:
•	X = 5;
•	Y = 40;
•	D = 1;
Ao dar um passo, deve ser somada a distância inicial + a distância do passo dado, ou seja:
Ao dar um passo = 5 + 1;
Dois passos: 5 + 1 + 1.
E assim, sucessivamente, até chegar ou passar à distância final de 40.
*/
const prompt = require("prompt-sync")();
let x = prompt('Qual é a posição:')
let y = prompt('Qual a distancia da rua?')
let z = prompt('qual é o tamanho do passo?')

const passosLeo = function(x,y,z){
var quantidade = ((y-x)/z)
return console.log(quantidade)
}
passosLeo(x,y,z)