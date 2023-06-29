const Discord = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
    console.log('Ericcartman is online!');
});


client.login('MTEyMzc2MTc1OTIyNDg3MzEwMA.GIkA2D.3GxCjiquRYr8vvNQrh46Hp4pjuXzT-vk4G4WMQ');



