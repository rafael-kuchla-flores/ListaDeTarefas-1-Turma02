const prompt = require('prompt-sync')();


let valorInteiro = parseInt(prompt("Digite um numero: "))

if (valorInteiro%2 === 0){
  console.log("O numero é par")
} else{
  console.log("O numero é impar")
}

