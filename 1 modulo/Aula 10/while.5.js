/* Crie uma ÚNICA LISTA de carros, com no mínimo 7 carros, contendo os seguites campos: id, modelo, marca e 
preço. Todas as informações serão recebidas pelo prompt. O usuário pode comprar mais de um carro e 
programa deverá retornar o valor total de venda. Enquanto o usuário optar por comprar menos do que 3 carros, 
o programa deverá exibir a seguinte mensagem: "Deseja comprar outro carro?" em caso afirmativo o programa 
continua em execução, caso contrário é finalizado. O programa deve retornar o 
O programa deve retornar o valor total no padrão monetário - R$50.000,000. */

const prompt = require("prompt-sync")();
var i = 0, j = 0, k=0, l=0;
let catalogoCarros = { id: [], modelo: [], marca: [], preco: [] };
//inserindo dados

console.log("CADASTRO DE PRODUTOS CONCESSIONÁRIA BLUE");
console.log("========================================");
do {
  console.log(`Cadastro do carro número ${i}`);
  console.log("===========================");
  let id = prompt("Qual é a id do carro que deseja cadastrar?");
  catalogoCarros.id.push(id);
  //console.log(catalogoCarros);
  let modelo = prompt("Qual é o modelo do carro que deseja cadastrar?");
  catalogoCarros.modelo.push(modelo);

  let marca = prompt("Qual é a marca do carro que deseja cadastrar?");
  catalogoCarros.marca.push(marca);

  let preco = prompt("Qual é a preco que deseja cadastrar?");
  catalogoCarros.preco.push(preco);

  i++;
} while (i < 1); //mudar para oito quando sair dos testes iniciais

do {
  console.log("PÁGINA DE VENDA DE CARROS");
  console.log("=========================");
  do {
    var modoAcesso = prompt("Você deseja fazer a compra por id ou modelo");
    //console.log(modoAcesso)
    
    if (
      modoAcesso == "id" ||
      modoAcesso == "modelo"
    ) {
      k = 1;
      // console.log(k)
    } else {
      console.log("Valor inválido. Tente novamente");
    }
  }while (k <1)

  if (modoAcesso == "modelo"){
    do {  
    let modelo = prompt("Qual o modelo do carro?"); 
    let modeloConsulta = catalogoCarros.modelo.indexOf(modelo)
    console.log(modeloConsulta);
    if(modeloConsulta !== -1){
       l =l++
        
    }else{
        console.log("modelo inexistente")
    }
  }while (l = 0)
}
  j++;
} while (j < 1);// editar depois
