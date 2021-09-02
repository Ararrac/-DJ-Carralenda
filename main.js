const { Intents } = require("discord.js");

require("dotenv").config();

const {Client} = require('discord.js');
const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready', () => {
    console.log(`${client.user.username} is now online ;)`);
});

//prefix verify
client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('-')); //ident(message);
});

//dialog
client.on('messageCreate', (message) => {
    console.log(`[${message.author.tag}] sent [${message.content}]`);
    if (message.author.bot) return;

    
    else if(message.content === 'o carrara eh gostoso?'){
        message.channel.send('mto');
        message.react('😍');
    }else if (message.content === 'yorick'){
        
        message.channel.send('o mestre');
        message.react('🧙‍♂️');
    }else if (message.content == 'miau'){
        message.channel.send('miau');
        message.react('🐱');
    }
    
   
    
});

//client.on('messageCreate', (message) => {
    ///if()
//});



client.login(process.env.DISCORDJS_BOT_TOKEN);