//Autora: Karen Mascarenhas Lourenço
//Exercício 6 - Lista de Fixação - Modulo 1 - 18/08/2021

/*6.	Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário:

- Quantidade de vida de um monstro (entre 10 e 50);
- Valor do ataque do jogador por turno (entre 5 e 10);
- Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro.
- O jogador irá derrotar o monstro em 8 turnos.*/

const prompt = require("prompt-sync")();
const vidaMonstro = +prompt(
  "Digite a quantidade de vida do monstro (valor entre 10 e 50)"
);

if (10 > vidaMonstro || vidaMonstro > 50) {
  console.log("Valor inválido");
} else {
  let valorAtaqueJogador = +prompt(
    "Digite o valor de ataque do jogador por turno (entre 5 e 10)"
  );

  if (5 > valorAtaqueJogador || valorAtaqueJogador > 10) {
    console.log("Valor Inválido");
  } else {
    let turnosNecessarios = Math.round(vidaMonstro / valorAtaqueJogador);

    if (Number.isInteger(vidaMonstro / valorAtaqueJogador)) {
      console.log("Serão necessários " + turnosNecessarios + " turnos.");
    } else {
      console.log(
        "Serão necessários " + Math.ceil(turnosNecessarios) + " turnos"
      );
    }
  }
}
