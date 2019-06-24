const Discord = require('discord.js');
const client = new Discord.Client(560167629885669379);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTYwMTY3NjI5ODg1NjY5Mzc5.XREUwA.W-f5BQ1Q35wPLC3jDtXQRA5gq5E);
