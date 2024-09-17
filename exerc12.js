const prompt = require('prompt-sync')()

let n = parseInt(prompt("Digite um valor e saiba seus múltiplos: "))

for (let i = 0; i <= 10; i++){
  console.log(i + " x " + n + " = " + i * n)
}