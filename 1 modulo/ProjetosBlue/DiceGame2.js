/*  Perguntar quantas rodadas você quer fazer; (1,0 ponto) OK
• Perguntar quantos jogadores vão jogar; (1,5 pontos)OK
• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos) OK
• Guarda todos os objetos em uma lista; (2,0 pontos)OK
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. (2,0 pontos)OK
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão. (2,0 pontos)*/
const prompt = require("prompt-sync")();
let valorDados = [1, 2, 3, 4, 5, 6];
var lista = [];
let confirmRodadas = 0,
  confirmJogadores = 0,
  k = 0;
do {
  //Validação de dados da rodada
  var quantidadeRodadas = prompt("Quantas rodadas deseja jogar?");
  if (quantidadeRodadas > 0) {
    confirmRodadas = 1;
  } else {
    console.log("Valor inválido. Tente novamente");
  }
} while (confirmRodadas !== 1);
do {
  //Validação de dados da quantidade de jogadores
  var quantidadeJogadores = prompt("Quantos players jogarão?");
  if (quantidadeJogadores > 0) {
    confirmJogadores = 1;
  } else {
    console.log("Valor Inválido. Tente novamente");
  }
} while (confirmJogadores !== 1);
for (i = 0; i < quantidadeJogadores; i++) {
    //criação de objeto para cada player
  var x = prompt(`Digite o nome do jogador ${i + 1}`);
  lista.push({
    Jogador: x,
    Vitorias: 0,
    Derrotas: 0,
    Empate: 0,
    NumerosTirados: [],
    RodadaAtual: 0
  });
}
//Implementação do game
do {
  console.log(`\nRODADA ${k + 1}\n============`);
  for (let j = 0; j < quantidadeJogadores; j++) {
    var dadosJogador =
      valorDados[Math.floor(Math.random() * valorDados.length)];
    lista[j].NumerosTirados.push(dadosJogador);
    lista[j].RodadaAtual =dadosJogador;
  }
  lista.sort(function (a, b) {
    if (a.RodadaAtual > b.RodadaAtual) {
        return 1;
    }
    if (a.RodadaAtual == b.RodadaAtual) {
        return 1;
    }
    if (a.RodadaAtual < b.RodadaAtual) {
      return -1;
    }
    return 0;
  }
  ).reverse();
 // console.log(lista)
  if (lista[0].RodadaAtual == lista[1].RodadaAtual) {
    lista[0].Empate++;
    lista[1].Empate++;
    console.log(`Empatou entre ${lista[0].Jogador} e ${lista[1].Jogador}`);
  }else{
      lista[0].Vitorias++;
      console.log(`${lista[0].Jogador}`)
  }   
  k = k + 1;
} while (quantidadeRodadas != k);
//console.log(lista);
// contabilizando as derrotas
for (i = 0; i < lista.length; i++){ 
    let y = quantidadeRodadas - (lista[i].Vitorias + lista[i].Empate)
    lista[i].Derrotas = y
}
//Ordenando a lista
lista.sort(function (a, b) {
  if (a.Vitorias > b.Vitorias) {
    return 1;
  }
  if (a.Vitorias == b.Vitorias) {
    if (a.Empate > b.Empate) {
      return 1;
    }
    if (a.Empate < b.Empate) {
      return -1;
    }
  }
  if (a.Vitorias < b.Vitorias) {
    return -1;
  }
  return 0;
});
lista.reverse();
console.log(`O grande vencedor é: ${lista[0].Jogador}`);
console.log("Pódio");
console.log(lista);
