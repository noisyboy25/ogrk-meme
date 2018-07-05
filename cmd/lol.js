const fs = require('fs');

exports.run = (msg, args) => {
    fs.readFile('./img/' + args[1] + '.png', (err, data) => {
        const text = '';
        const list = ['cry', 'dog', 'kojima', 'pain'];

        for (let i = 0; i < list.length; i++) {
            text += list[i] + '\n';
        }

        if (err) msg.channel.send(text);
        msg.channel.send('', {file: data});
    });
}