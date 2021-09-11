/*6.	Crie uma função para inverter um array passado pelo usuário */

const prompt = require("prompt-sync")();
var dadosUsuario = [];
for (var i = 0; i < 4; i++) {
    var a = prompt("Digite a informação",);
    dadosUsuario.push(a);
    //console.log(dadosUsuario);
}
const inverterArray = function(dadosUsuario) {
  dadosUsuario = dadosUsuario.reverse()
  
  console.log(dadosUsuario)
}
inverterArray(dadosUsuario);