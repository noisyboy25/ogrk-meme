const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const prefix = '*';
//const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));


client.on('ready', () => {
    console.log('ready');
});

client.on('message', (msg) => {
    if (msg.author.bot || !msg.content.startsWith(prefix)) return;

    args = msg.content.slice(1).split(' ');
    console.log(args);

    require('./cmd/'+args[0]).run(msg, args);
});

client.login(process.env.token);