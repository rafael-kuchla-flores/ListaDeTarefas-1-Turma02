const prompt = require('prompt-sync')()

let valor1 = parseInt(prompt('Digite o primeiro valor: '))
let valor2 = parseInt(prompt('Digite o segundo valor:  '))

let maior;
let menor;

if(valor1 === valor2){
  console.log("Os valores são iguais: ERRO")
} else if(valor1 < valor2){
  menor = valor1;
  maior = valor2;
} else{
  menor = valor2;
  maior = valor1;
}

console.log(menor);
console.log(maior);