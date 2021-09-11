/* 4.	Data com mês por extenso - Construa uma função que receba uma data no formato DD/MM/AAAA
 e devolva uma string no formato D de mesPorExtenso de AAAA.
Valide a data e retorne NULL caso a data seja inválida.
*/
const prompt = require("prompt-sync")();
const meses = ['zero','janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
let dia = prompt("digite o dia");
let mes = prompt("digite o mes");
//let ano = prompt("digite o ano");
const data = function (a,b){
    if (a <= 31 && b <= 12){
        
        return console.log(meses[b])
    
    }
}
data(dia,mes);
