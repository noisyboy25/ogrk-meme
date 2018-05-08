exports.run = (msg, args) => {
    url = msg.mentions.users.first() ? msg.mentions.users.first().avatarURL : msg.author.avatarURL;
    msg.channel.send('', {file: url+'.jpg'});
}