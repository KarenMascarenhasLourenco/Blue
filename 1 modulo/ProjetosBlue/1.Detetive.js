//Autora: Karen Mascarenhas Lourenço
//Projeto 01 - Projeto Detetive (Módulo1)
//Conceito: Eu escrevi o programa como se fosse um app ou um jogo de browser por isso coloquei instruções para o usuário e tentei mostrar a ideia mais clara visualmente.
//Introdução
const prompt = require("prompt-sync")();
console.log("DPC - Departamento de Polícia da Blue");
console.log("  Programa de Análise de Suspeitos");
console.log("=====================================\n");
console.log("         PARÂMETROS DA ANÁLISE");
console.log("Respostas Positivas     Classificação");
console.log("         0                Inocente   ");
console.log("         1                Inocente   ");
console.log("         2                Suspeito   ");
console.log("         3                Cúmplice   ");
console.log("         4                Cúmplice   ");
console.log("         5                Assassino  ");
console.log("=====================================\n");
console.log(
  "Para o sucesso da análise é importante que siga as seguintes instruções:"
);
console.log(
  "- Para respostas positivas responda sempre com s ou sim (maiuscula ou minúscula)"
);
console.log(
  "- Para respostas negativas responda sempre com n, nao ou não (maiuscula ou minúscula)"
);
console.log(
  "- Caso sua resposta esteja fora do padrão explicado anteriormente o programa perguntará novamente\n"
);
console.log("=====================================\n");
//Declarações

const nomeInvestigado = prompt("Qual é o nome do investigado(a)?\n");
var score = 0;
var controlador = 0;
//Estrutura de repetição da primeira pergunta
do {
  var telefoneVitima = prompt("\n- Telefonou para vítima?\n")
    .toUpperCase()
    .slice(0, 1);
  if (telefoneVitima === "S" || telefoneVitima === "N") {
    controlador = ++controlador;
  } else {
    console.log("Valor inválido, tente novamente\n\n");
  }
} while (controlador == 0);

//Bloco para contabilizar primeira pergunta
if (telefoneVitima === "S") {
  score = ++score;
} else {
}
//Estrutura de repetição da segunda pergunta
do {
  var localCrime = prompt("\n- Esteve no local do crime?\n")
    .toUpperCase()
    .slice(0, 1);
  if (localCrime === "S" || localCrime === "N") {
    controlador = ++controlador;
  } else {
    console.log("Valor inválido. Tente novamente\n\n");
  }
} while (controlador == 1);
//Bloco para contabilizar segunda pergunta
if (localCrime === "N") {
} else {
  score = ++score;
}
//Estrutura de repetição da terceira pergunta
do {
  var moraPerto = prompt("\n- Mora perto da vítima?\n")
    .toUpperCase()
    .slice(0, 1);
  if (moraPerto === "S" || moraPerto === "N") {
    controlador = ++controlador;
  } else {
    console.log("Valor inválido. Tente novamente\n\n");
  }
} while (controlador == 2);
//Bloco para contabilizar terceira pergunta
if (moraPerto === "S") {
  score = ++score;
} else {
}
//Estrutura de repetição da quarta pergunta
do {
  var deviaVitima = prompt("\n- Devia para a vítima?\n")
    .toUpperCase()
    .slice(0, 1);
  if (deviaVitima === "S" || deviaVitima === "N") {
    controlador = ++controlador;
  } else {
    console.log("Valor inválido. Tente novamente");
  }
} while (controlador == 3);
//Bloco para contabilizar quarta pergunta
if (deviaVitima === "S") {
  score = ++score;
} else {
}
//Estrutura de repetição da quarta pergunta
do {
  var trabalhaVitima = prompt("\n- Já trabalhou com a vítima?\n")
    .toUpperCase()
    .slice(0, 1);
  if (trabalhaVitima === "S" || trabalhaVitima === "N") {
    controlador = ++controlador;
  } else {
    console.log("Valor inválido. Tente novamente\n\n");
  }
} while (controlador == 4);
//Bloco para contabilizar quinta pergunta
if (trabalhaVitima === "S") {
  score = ++score;
} else {
}
//Apresentação dos resultados
console.log("\n===================================");
console.log("Após análise podemos concluir que:");
if (score < 2) {
  console.log(nomeInvestigado + " é inocente");
} else if (score === 2) {
  console.log(nomeInvestigado + " é suspeito(a)");
} else if (score === 3 || score === 4) {
  console.log(nomeInvestigado + " é cúmplice");
} else {
  console.log(nomeInvestigado + " é o(a) assassino(a)!!");
}
