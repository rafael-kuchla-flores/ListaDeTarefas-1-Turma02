const prompt = require('prompt-sync')();

let nota = parseInt(prompt("Digite a nota de seu aluno: "));


if (nota >= 6){
  console.log("Aprovado")
} else if(nota < 6 & nota >= 4){
  console.log("Recuperação")
} else{
  console.log("Reprovado")
}