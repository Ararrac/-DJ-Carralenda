const { Intents, ReactionUserManager, Channel, VoiceChannel } = require("discord.js");
const ytdl = require("ytdl-core");

require("dotenv").config();

const {Client} = require('discord.js');
const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES", "GUILD_PRESENCES"]});
const prefix = "-";

const servidores = {
    'server':{
        connection: null,
        dispatcher: null
    }
}
var queue = [50];
var arg = [0];


client.on('ready', () => {
    console.log(`${client.user.username} is now online ;)`);
});

//prefix verify
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)){
        const [cmd, ...args] = message.content.trim().substring(prefix.length).split(" ");
        console.log(cmd);
        console.log(args);
        if(args === " ") args = null;
        if(cmd === "p"){ 
            if(!message.member.voice.channel){  
                message.channel.send('por favor entre em um canal ne camarada');
                return;
                }
            
            //exports.run(args);
            let url = args;
            if(!url) return message.channel.send("eitaaa, nao é isso nao");

            let verify = ytdl.validateURL(url);
            if(!verify) return message.channel.send("Precisa ser link do youtube amigao!");
            message.channel.send('A musica selecionada tocara em breve');
            let connection = await message.member.voice.channel.join(VoiceChannel);
            
}
            
            
            
            
            //servidores.server.connection = await message.member.voice.channel.join();

            //let songData = ytdl.getInfo(url);
            /*let song = {
                title: songData.videoDetails.title,
                url: songData.videoDetails.video_url
            };*/
           
            
            let dispatcher = connection.play(ytdl(url), {filter: 'audioonly', quality:'highest'});

            //message.channel.send(`[${song.title}][${song.url}] começou a tocar, seguuura`);
            message.channel.send(' começou a tocar, seguuura');
            

            }
           

            
             
         //ident(message);
        

        
    
    

});



   

    

/*exports.run = async(message, args) =>{
    let url = args;
    if(!url) return message.channel.send("Só trabalho com links no momento!");

    let verify = await ytdl.validateURL(url);
    if(!verify) return message("Precisa ser do youtube amigao!");

    let songData = await ydtl.getInfo(url);
    let song = {
        title: songData.videoDetails.title,
        url: songData.videoDetails.video_url
    };

    let connection = await message.member.voice.channel.join();
    let dispatcher = connection.play(ytdl(url), {filter: 'audioonly', quality:'highest'});

    message.channel.send(`[${song.title}][${song.url}] começou a tocar, seguuura`)

}

exports.help = {
    name:'play',
    aliases: ['tocar']
}
*/


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