//Autora:Karen Mascarenhas lourenço
//Projeto 04 - Election
/*O programa tem que:
Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)
Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos) ok
Ter uma função chamada votacao(autorizacao, votosValidos) que valida  e contabiliza o votosValidos (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o votosValidos não possa ser contabilizado; (2,0 pontos) 
Contabilizar os votos de acordo com os significados (3,0 pontos):
1 = Candidato 1
2 = Candidato 2
3 = Candidato 3
4 = Voto Nulo`
5 = Voto em Branco
Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
 - O total de votos para cada candidato 
 - O total de votos nulos
 - O total de votos em branco
 - Qual candidato venceu a votação*/
const prompt = require("prompt-sync")();
let a,
  x,
  verificAnswer = 0,
  again = 0,
  quantidadeVotosValidos = 0,
  control = 0;
let verific = 0;
var listaValidos = [];
var lista = [];
let votosValidos = [{candidatoUm:0},{candidatoDois:0},{candidatoTres:0}];
let votosBrancosNulos = {
  votosNulos: 0,
  votosBrancos: 0,
};
//função para segundo turnos


//Função para verificar se o eleitor está apto a votar
const autorizaVoto = function (anoNascimento) {
  //validação de dados
  if (2005 >= anoNascimento && anoNascimento >= 2003) {
    console.log("Opcional");
    x = 0; //necessário para que seja facultativo o voto no programa
  } else if (anoNascimento >= 2006 || anoNascimento <= 1900) {
    a = false;
    console.log("Negado");
  } else {
    a = true;
    console.log("Obrigatório");
  }
  return;
};
//função para receber o voto
const votacao = function (autorizacao, voto) {
  if (autorizacao == true) {
    if (voto == 1) {
      votosValidos[0].candidatoUm++;
      quantidadeVotosValidos++;
    } else if (voto == 2) {
      votosValidos[1].candidatoDois++;
      quantidadeVotosValidos++;
    } else if (voto == 3) {
      votosValidos[2].candidatoTres++;
      quantidadeVotosValidos++;
    } else if (voto == 4) {
      votosBrancosNulos.votosNulos++;
    } else {
      votosBrancosNulos.votosBrancos++;
    }
  }
  return;
};

//inicio do programa
anoNascimento = prompt("Qual é o seu ano de nascimento?");
autorizaVoto(anoNascimento);
if (x == 0) {
  //tratando opcionais
  while (control != 1) {
    var opcional = prompt("Deseja Votar nessa eleição?")
      .toUpperCase()
      .slice(0, 1);
    if (opcional == "S") {
      a = true;
      control++;
    } else if (opcional == "N") {
      console.log("Que pena que você não exerceu seu direito de votar.....");
      control++;
    } else {
      console.log("Resposta Inválida.Tente novamente");
    }
  }
}
if (a == true) {
  do {
    do {
      var voto = prompt("Você Vota em quem?");
      if (voto != 1 && voto != 2 && voto != 3 && voto != 4 && voto != 5) {
        console.log("Valor inválido");
        fraude++;
      }
    } while (voto != 1 && voto != 2 && voto != 3 && voto != 4 && voto != 5);
    votacao(a, voto);
    do {
      controlvotacao = 0;
      let porcentUm =
        (votosValidos[0].candidatoUm * 100) / quantidadeVotosValidos.toFixed(2);
      var porcentDois =
        (votosValidos[1].candidatoDois * 100) / quantidadeVotosValidos.toFixed(2);
      var porcentTres =
        (votosValidos[2].candidatoTres * 100) / quantidadeVotosValidos.toFixed(2);
      var repetir = prompt("Deseja votar novamente?").toUpperCase().slice(0, 1);
      if (repetir == "S") {
      } else if (repetir == "N") {
        again++;
        console.log(
          `O candidato 1 teve: ${votosValidos[0].candidatoUm} votos\nO candidato 2 teve: ${votosValidos[1].candidatoDois} votos\n`
        );
        console.log(
          `O candidato 3 teve: ${votosValidos[2].candidatoTres} votos\nVotos Nulos: ${votosBrancosNulos.votosNulos} votos\nVotos Brancos: ${votosBrancosNulos.votosBrancos} votos`
        );
        console.log(
          `\n\nO candidato 1 teve ${porcentUm}% dos votos.\nO candidato dois teve: ${porcentDois}% dos votos.\nO candidato três teve: ${porcentTres}% dos votos.`
        );
        if (porcentUm > 50 || porcentDois > 50 || porcentTres > 50) {
          console.log("O vencedor foi:");
        } else {
          do {
            var segundoTurnoAsk = prompt("Deseja segundo turno?")
              .toUpperCase()
              .slice(0, 1);
            if (segundoTurnoAsk == "N") {
              console.log("O vencedor foi: ");
              verificAnswer++;
            } else if (segundoTurnoAsk == "S") {
              verificAnswer++;
              quantidadeVotosValidos = 0;
              listaValidos.push(votosValidos[0]);
              listaValidos.push(votosValidos[1]);
              lista.push({ votosNulos: 0, numero: 4 });
              lista.push({ votosBrancos: 0, numero: 5 });
              do {
                let voto2 = prompt("Voce vota em quem?");
                for (k = 0; k < 2; k++) {
                  if (voto2 == listaValidos[k].numero || lista[k].numero) {
                    verific++;
                    if (voto2 == 1) {
                      listaValidos[k].candidatoUm++;
                      quantidadeVotosValidos++;
                    } else if (voto2 == 2) {
                      listaValidos[k].candidatoDois++;
                      quantidadeVotosValidos++;
                    } else if (voto2 == 3) {
                      listaValidos.candidatoTres++;
                      quantidadeVotosValidos++;
                    } else if (voto2 == 4) {
                      lista.votosNulos++;
                    } else {
                      lista.votosBrancos++;
                    }
                  } else {
                    console.log("Voto Inválido.Digite Novamente");
                    verific = 0;
                  }
                  console.log(listaValidos)
                }
              } while (verific !== 0);
              do {
                verific = 0;
                var repetir = prompt("Deseja votar novamente?")
                  .toUpperCase()
                  .slice(0, 1);
                if (repetir == "S") {
                } else if (repetir == "N") {
                  again++;
                  //tratar empate
                  console.log(`Quem ganhou a eleição foi: ${lista[0]}`);
                } else {
                  console.log("Valor inválido tente novamente");
                  verific++;
                }
              } while (verific == 0);
            } else {
              console.log("resposta inválida.Tente Novamente");
            }
          } while (verificAnswer == 0);
        }
      } else {
        console.log("Resposta inválida tente novamente");
        controlvotacao++;
      }
    } while (controlvotacao != 0);
  } while (again == 0);
} else if (a == false) {
  console.log("Você não esta autorizado a votar");
}

//estabelecer pergunta pra voto facultativp
