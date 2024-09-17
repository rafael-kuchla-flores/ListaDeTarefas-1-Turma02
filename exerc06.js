const prompt = require('prompt-sync')()

let lado1 = parseInt(prompt('Digite um valor para o primeiro lado: '))
let lado2 = parseInt(prompt('Digite um valor para o segundo lado: '))
let lado3 = parseInt(prompt('Digite um valor para o terceiro lado: '))

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  console.log('É possível formar um triangulo com essas medidas.')
  console.log('|')
  if (lado1 === lado2 && lado2 === lado3) {
    console.log('Seu triângulo é o EQUILATERO')
  } else if (lado1 !== lado2 && lado2 !== lado3 && lado2 !== lado3) {
    console.log('Seu triângulo é o ESCALENO')
  } else {
    console.log('Seu triângulo é o ISÓSCELES')
  }
} else {
  console.log('Não é possível formar um triangulo')
}
