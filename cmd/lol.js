const fs = require('fs');

exports.run = (msg, args) => {
    fs.readFile('./img/' + args[1] + '.png', (err, data) => {
        let text = '';
        const list = ['cry', 'dog', 'kojima', 'pain'];

        list.forEach((i) => {
            text += `\`${i}\`\n`;
        });

        if (err) msg.channel.send(text);
        msg.channel.send('', {file: data});
    });
}