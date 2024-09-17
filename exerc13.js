const prompt = require('prompt-sync')()

let soma = 0;
let contador = 0;
let numero;

do {
    numero = parseFloat(prompt("Digite um número decimal (ou 0 para terminar):"));
    if (numero !== 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0);

let media = contador > 0 ? soma / contador : 0;

console.log("A média aritmética é: " + media);
