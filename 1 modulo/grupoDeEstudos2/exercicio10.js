/* 10.	Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
- Esse funcionário foi contratado em 2010, com salário inicial de R$1000,00;
- Em 2011 recebeu aumento de 1,5% sobre seu salário inicial;
- A partir de 2012 (inclusive), os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior. 
Faça um programa que determine o salário atual desse funcionário.
*/ 
salarioInicial = 1000;
anoPorcentagem = 0.015
aumento=0
for(i=0; i<12; i++){ 
  aumento = aumento + (salarioInicial*anoPorcentagem);
    anoPorcentagem*2 
    console.log(aumento);
}
