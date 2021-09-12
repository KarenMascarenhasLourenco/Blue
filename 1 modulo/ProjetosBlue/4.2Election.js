const prompt = require("prompt-sync")();
//controladores
let fimVotacao = false,
  finalizar,
  controleFacultativo = 0,
  pass = false;
//objetos
votosValidos = [
  { contadorVotos: 0, numero: 1 },
  { contadorVotos: 0, numero: 2 },
  { contadorVotos: 0, numero: 3 },
];
brancosENulos = { votosBrancos: 0, votosNulos: 0 };
//Função que autoriza o votosValidos
const autorizaVoto = function (anoNascimento) {
  if (anoNascimento <= 2003 && anoNascimento >= 1956) {
    console.log("Obrigatório");
    a = true;
    b = 1;
  } else if (
    anoNascimento == 2004 ||
    anoNascimento == 2005 ||
    (anoNascimento <= 1955 && anoNascimento >= 1901)
  ) {
    console.log("Facultativo");
    b = 0;
  } else if (anoNascimento <= 1900 || anoNascimento >= 2006) {
    console.log("Negado");
    a = false;
    b = 1;
  }
  return;
};
//Função que contabiliza os votos
const votacao = function (a, voto) {
  if (a == false) {
    console.log("Você não pode votar");
  } else if (a == true) {
    if (voto == 1) {
      votosValidos[0].contadorVotos++;
    } else if (voto == 2) {
      votosValidos[1].contadorVotos++;
    } else if (voto == 3) {
      votosValidos[2].contadorVotos++;
    } else if (voto == 4) {
      brancosENulos.votosNulos++;
    } else if (voto == 5) {
      brancosENulos.votosBrancos++;
    }
  }
  return;
};
//função voto facultativo
const votoFacultativo = function (b) {
  //só pra treinar funções
  if (b == 0) {
    do {
      controleFacultativo = 0;
      console.log("Responda com Sim ou Não");
      let facultativo = prompt("Deseja votar nessa eleição?")
        .toUpperCase()
        .slice(0, 1);
      if (facultativo == "S") {
        a = true;
        controleFacultativo++;
      } else if (facultativo == "N") {
        a = false;
        controleFacultativo++;
        console.log("Você escolheu não votar nessa eleição\n");
      } else {
        console.log("Resposta inválida. Tente novamente.");
      }
    } while (controleFacultativo != 1);
  }
  return;
};
//Função de exibição de resultado
const exibirResultados = function () {
  console.log("VOTOS VÁLIDOS");
  for (i = 0; i < votosValidos.length; i++) {
    console.log(
      `o candidato ${votosValidos[i].numero} teve ${votosValidos[i].contadorVotos} votos`
    );
  }
  console.log(brancosENulos);
  console.log(
    `\n===========================\nO vencedor da eleição foi o candidato ${votosValidos[0].numero}`
  );
};
//Programa
do {
  let controleNascimento = 0,
    contagemVotos = 0;
  do {
    //validando dado anoNascimento
    console.log();
    anoNascimento = prompt("Nasceu em que ano?");
    console.log();
    if (anoNascimento > 0) {
      controleNascimento++;
    } else {
      console.log("Valor Inválido. Tente novamente");
    }
  } while (controleNascimento != 1);
  autorizaVoto(anoNascimento);
  votoFacultativo(b);
  if (a == true) {
    console.log("_____________Eleições____________");
    console.log(
      "Para votar no candidato 1 digite 1\nPara votar no candidato 2 digite 2\nPara votar no candidato3 digite 3"
    );
    console.log("Para votar nulo digite 4\nPara votar branco digite 5");
    do {
      //pega o voto
      voto = prompt("Digite sua opção de voto").toUpperCase().slice(0, 1);
      console.log();
      if (voto == 1 || voto == 2 || voto == 3 || voto == 4 || voto == 5) {
        votacao(a, voto);
        contagemVotos++;
      } else {
        console.log("Valor inválido. Tente Novamente");
      }
    } while (contagemVotos != 1);
  }
  do {
    console.log();
    finalizar = prompt("Deseja encerrar a votação?").toUpperCase().slice(0, 1);
    console.log();
    if (finalizar == "N") {
      pass = true;
    } else if (finalizar == "S") {
      fimVotacao = true;
      pass = true;
      //organizando a lista
      votosValidos
        .sort(function (a, b) {
          if (a.contadorVotos > b.contadorVotos) {
            return 1;
          }
          if (a.contadorVotos < b.contadorVotos) {
            return -1;
          }
          return 0;
        })
        .reverse();
      exibirResultados();
    } else {
      console.log("Valor inválido. Digite sim ou não");
      pass = false;
    }
  } while (pass == false);
} while (fimVotacao == false);
