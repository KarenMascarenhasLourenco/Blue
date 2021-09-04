//Desafio

/* Crie uma LISTA de produtos onde a mesma apresente os seguintes campos: descrição, valor e quantidade. Com base nas informações apresentadas o seu programa deverá mostrar o valor total gasto na compra.
Exemplo: 
Mercado Sexta da Maldade

Descrição: Coca Cola - Valor: R$ 9,00 - Quantidade: 10
Toddynho - R$3,50 - Quantidade: 5
Doritos - R$2,00 - Quantidade 2
O programa deve retornar: Total: 111,50
*/
const listaDeProduto= ['Coca-Cola', 'nescau', 'Doritos']//não preciso para saber o valor(nesse momento)
const listaPrecos = [4, 2.5, 3]
const quantidade = []
const tabela= []
index = 0
const prompt = require("prompt-sync")();

while (index < listaDeProduto.length) {
let pergunta = prompt(`Quantos itens de ${listaDeProduto[index]}? `)
quantidade.push(pergunta)
tabela.push(listaPrecos[index]*quantidade[index])
index++
}
//console.log(tabela)
console.log(`O valor total é: R$${(tabela[0]+tabela[1]+tabela[2]).toFixed(2)} reais`)
