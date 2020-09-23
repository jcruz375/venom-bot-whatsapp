const venom = require('venom-bot');

venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage((message) => {
        if (message.body === 'Oi' || message.body === 'Olá' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Esta é uma mensagem automática, escolha uma opção: 1 ou 2')
                .then((result) => {
                    console.log(result);
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); 
                });
        }
        if(message.body === '1'){
            client.sendText(message.from, 'você escolheu a primeira opção')
        }
        if(message.body === '2'){
            client.sendText(message.from, 'você escolheu a segunda opção')
        }
    });
};