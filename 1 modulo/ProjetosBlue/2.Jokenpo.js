//Autora: Karen Mascarenhas Lourenço
//Projeto 02 - Jokenpo
const prompt = require("prompt-sync")();
do {
  var contador = 0, score = 0, respostaAdequada = 0, pcscore = 0, again = 0;
  var possibilidades = ["PEDRA", "PAPEL", "TESOURA"];
  console.log(" Vamos jogar Jokenpo!");
  do {//Processamento de Quantidade de Rodadas
    var quantidadeRodadas = +prompt("Quantas rodadas vamos jogar?");
    if (quantidadeRodadas > 0) {
      contador = ++contador;
    } else {
      console.log("Valor inválido. Tente Novamente");
    }
  } while (contador == 0);
  //Jogo
  do { //Verificando se a resposta é válida
    do {
      console.log("========================");
      var escolhaJogador = prompt("Pedra, Papel ou Tesoura?\n").toUpperCase();
      var posicao = possibilidades.indexOf(escolhaJogador);
    } while (escolhaJogador != possibilidades[posicao]);
    respostaAdequada = ++respostaAdequada
    var escolhaAleatoria=possibilidades[Math.floor(Math.random()*possibilidades.length)];
      console.log("A Blue escolheu: " + escolhaAleatoria + "\n");
    //Processamento de resultados
    if (escolhaJogador === "PEDRA") {
      if (escolhaAleatoria === "PEDRA") {
        console.log("Essa rodada deu empate\n");
      } else if (escolhaAleatoria === "TESOURA") {
        score = ++score;
        console.log("Você ganhou essa rodada!!!!!!\n");
      } else {
        pcscore = ++pcscore;
        console.log("Você perdeu essa rodada!!!!!!\n");
      }
    } else if (escolhaJogador === "PAPEL") {
      if (escolhaAleatoria === "PAPEL") {
        console.log("Essa rodada deu empate\n");
      } else if (escolhaAleatoria === "PEDRA") {
        score = ++score;
        console.log("Você ganhou essa rodada!!!!!!\n");
      } else {
        pcscore = ++pcscore;
        console.log("Você perdeu essa rodada!!!!!!\n");
      }
    } else {
      if (escolhaAleatoria === "TESOURA") {
        console.log("Essa rodada deu empate\n");
      } else if (escolhaAleatoria === "PEDRA") {
        score = ++score;
        console.log("Você ganhou essa rodada!!!!!!\n");
      } else {
        pcscore = ++pcscore;
        console.log("Você perdeu essa rodada!!!!!!\n");
      }
    }
  } while (quantidadeRodadas !== respostaAdequada);
  //Apresentação de resultados
  console.log("==========================");
  console.log("Seu total de vitórias: " + score);
  console.log("Seu total de derrotas: " + pcscore);
  if (score === pcscore) {
    console.log("Você empatou com o game!\n");
  } else if (score > pcscore) {
    console.log("Você é o grande campeão do game!\n");
  } else {
    console.log("Você perdeu o game\n");
  }
  //Reiniciar game
  let reiniciar = prompt("Deseja reiniciar o jogo [S/N]\n").toUpperCase().slice(0, 1);
  if (reiniciar === "S" || reiniciar === "N") {
    if (reiniciar === "N") {
      again = ++again;
    } 
  } else {
    console.log("Resposta inválida. Saindo do jogo...");
    again = ++again;
  }
} while (again === 0);
console.log("Espero que tenha se divertido");