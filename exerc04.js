const prompt = require('prompt-sync')(); // Necessário para receber input do usuário no console

function mostrarMenu() {
    console.log("Escolha uma opção:");
    console.log("1. Dizer Olá");
    console.log("2. Mostrar Data e Hora");
    console.log("3. Sair");
}

let opcao;

do {
    mostrarMenu();
    opcao = prompt("Digite o número da opção desejada: ");

    switch (opcao) {
        case '1':
            console.log("Olá, usuário!");
            break;
        case '2':
            console.log("Data e Hora atuais: " + new Date().toLocaleString());
            break;
        case '3':
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== '3');
