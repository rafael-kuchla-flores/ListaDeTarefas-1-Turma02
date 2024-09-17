const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite sua idade: "))

if(idade > 5 & idade <= 12){
  console.log("Você ainda é uma criança")
} else if (idade > 13 & idade < 18){
  console.log("Você ainda é um adolescente")
} else if(idade > 18 & idade < 50){
  console.log("Calma, você esta na flor da idade")
} else{
  console.log("Bora vô que ta na hora do seu remédio")
}