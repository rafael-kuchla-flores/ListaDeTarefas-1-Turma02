const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;
let i = 1;

while (i <= numero) {
    fatorial *= i;
    i++;
}

console.log("O fatorial de " + numero + " é: " + fatorial);
