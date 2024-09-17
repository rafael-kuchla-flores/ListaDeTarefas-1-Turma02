const prompt = require('prompt-sync')()

let macas = parseInt(prompt('Quantas maçãs vai querer? '))

let quantMacas

if (macas >= 12) {
  quantMacas = macas * 0.25
  
} else {
  quantMacas = macas * 0.3
}

console.log('Perfeito! Suas', macas, 'maçãs ficaram R$', quantMacas)