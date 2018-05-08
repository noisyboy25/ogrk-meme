const fs = require('fs');

exports.run = (msg, args) => {
    fs.readFile('./img/'+args[1]+'.png', (err, data) => {
        if (err) msg.channel.send('`kojima`\n'+'`dog`');
        msg.channel.send('', {file: data});
    });
}