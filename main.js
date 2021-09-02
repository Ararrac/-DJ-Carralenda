const { Intents, ReactionUserManager, Channel, VoiceChannel } = require("discord.js");
const ytdl = require("ytdl-core");
const {
	NoSubscriberBehavior,
	StreamType,
	createAudioPlayer,
	createAudioResource,
	entersState,
	AudioPlayerStatus,
	VoiceConnectionStatus,
	joinVoiceChannel,
} = require('@discordjs/voice');




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

async function connectToChannel(channel) {
	const connection = joinVoiceChannel({
		channelId: channel.id,
		guildId: channel.guild.id,
		adapterCreator: channel.guild.voiceAdapterCreator,
	});
	try {
		await entersState(connection, VoiceConnectionStatus.Ready, 30_000);
		return connection;
	} catch (error) {
		connection.destroy();
		throw error;
	}
}

client.on('ready', () => {
    console.log(`${client.user.username} is now online ;)`);
});

//prefix verify
client.on('messageCreate', async (message) => {
    const guild = client.guilds.cache.get("601135111290748948");
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
            
            
            let url = args;
            if(!url) return message.channel.send("eitaaa, nao é isso nao");

            let verify = ytdl.validateURL(url);
            if(!verify) return message.channel.send("Precisa ser link do youtube amigao!");
                message.channel.send('A musica selecionada tocara em breve');
                const channel = message.member?.voice.channel;
		        if (channel) {
			    
				const connection = await connectToChannel(channel);
				
		        } 
		        
            
               
            
            
            //let connection = await message.member.voice.channel.join();
            
}
            
            
            
            
            //servidores.server.connection = await message.member.voice.channel.join();

            //let songData = ytdl.getInfo(url);
            /*let song = {
                title: songData.videoDetails.title,
                url: songData.videoDetails.video_url
            };*/
           
            
            //let dispatcher = connection.play(ytdl(url), {filter: 'audioonly', quality:'highest'});

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
    if (message.author.bot) return;
    console.log(`[${message.author.tag}] sent [${message.content}]`);
    

    
    if(message.content === 'o carrara eh gostoso?'){
        message.channel.send('mto');
        message.react('😍');
        console.log(`Answered [${message.author.tag}] with mto and reacted with heart emote`);
    }else if (message.content === 'yorick'){
        
        message.channel.send('o mestre');
        message.react('🧙‍♂️');
        console.log(`Answered [${message.author.tag}] with o mestre and reacted with mage emote`);
    }else if (message.content == 'miau'){
        message.channel.send('miau');
        message.react('🐱');
        console.log(`Answered [${message.author.tag}] with miau and reacter with cat emote`);
    }
    
   
    
});

//client.on('messageCreate', (message) => {
    ///if()
//});



client.login(process.env.DISCORDJS_BOT_TOKEN);