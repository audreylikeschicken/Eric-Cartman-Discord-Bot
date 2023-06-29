const Discord = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
    console.log('Ericcartman is online!');
});


client.login('Your Token Here');



