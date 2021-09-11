//9.	Faça um programa que calcule a média de todos os números de um array.
let a = [1,2,3,4,5,6,7,8,9,10,]
var somatorio = 0
for (let i = 0; i < a.length; i++){
    valor = a[i]
    somatorio = somatorio + valor
}
media = somatorio/(a.length)
console.log(media)