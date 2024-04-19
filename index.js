// index.js

// Este é um exemplo simples de um ponto de entrada de uma extensão do Visual Studio Code

// Importe o módulo 'vscode' para acessar a API do VS Code
const vscode = require('vscode');

// Esta função é chamada quando sua extensão é ativada
function activate(context) {
    // Imprime uma mensagem no console ao ativar a extensão
    console.log('A extensão foi ativada.');

    // Exemplo: Registra um comando chamado 'helloWorld'
    let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
        // Exibe uma caixa de diálogo com a mensagem 'Hello World!'
        vscode.window.showInformationMessage('Hello World!');
    });

    // Adiciona o comando ao contexto da extensão
    context.subscriptions.push(disposable);
}

// Esta função é chamada quando sua extensão é desativada
function deactivate() {
    // Imprime uma mensagem no console ao desativar a extensão
    console.log('A extensão foi desativada.');
}

// Exporta as funções 'activate' e 'deactivate' para o VS Code
module.exports = {
    activate,
    deactivate
};
