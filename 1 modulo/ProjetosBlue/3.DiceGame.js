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
  });
}
//Implementação do game
do {
  console.log(`\nRODADA ${k + 1}\n============`);
  for (j = 0; j < quantidadeJogadores; j++) {
    var dadosPC = valorDados[Math.floor(Math.random() * valorDados.length)];
    var dadosJogador =
      valorDados[Math.floor(Math.random() * valorDados.length)];
    lista[j].NumerosTirados.push(dadosJogador);
    console.log(
      `${lista[j].Jogador} tirou ${dadosJogador} e o PC tirou ${dadosPC}`
    );
    if (dadosPC < dadosJogador) {
      lista[j].Vitorias++;
      console.log(`${lista[j].Jogador} Venceu!\n`);
    } else if (dadosPC > dadosJogador) {
      lista[j].Derrotas++;
      console.log(`${lista[j].Jogador} Perdeu!\n`);
    } else {
      lista[j].Empate++;
      console.log(`Empatou!\n`);
    }
  }
  k = k + 1;
} while (quantidadeRodadas != k);
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
