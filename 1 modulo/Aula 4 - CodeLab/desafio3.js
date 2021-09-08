let valorSaque = +prompt("Quanto deseja sacar?");
let valorAtualizado =0
let cedula1 = 0
let cedula2 = 0
let cedula5 = 0
let cedula10 =0
let cedula50 =0
let cedula100 =0

if(valorSaque>=100){
 cedula100= Math.floor(valorSaque/100);
 valorS= valorSaque - 100*cedula100;
 console.log(valorSaque)
}else if (valorAtualizado>=50){
  cedula50= Math.floor(valorAtualizado/50);
  valorSaque=valorSaque-50*cedula50
  console.log(cedula50)
}else if (valorSaque>=10){
  cedula10= Math.floor(valorSaque/10);
  valorSaque=valorSaque-10*cedula10;

}else if (valorSaque>=5){
  cedula5=Math.floor(valorSaque/5);
  valorSaque=valorSaque-5*cedula5;
}else if(valorSaque>=1){
  cedula1=valorSaque/1;
}
console.log("Voce receberá: \n "+ cedula1+" nota(s) de 1 real \n"+ cedula5+" nota(s) de 5 reais \n" + cedula10+" nota(s) de 10 reais \n"+ cedula50+" nota(s) de 50 reais \n"+ cedula100+" nota(s) de 100 reais ")