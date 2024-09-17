const prompt = require('prompt-sync')()


let somaTotal = 0

for(i = 0; i < 5; i++){
  let numero = parseInt(prompt("escreva um numero: "))

  somaTotal += numero;
}

console.log("A soma total é", somaTotal)


