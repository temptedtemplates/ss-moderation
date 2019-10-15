const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
var prefix = "ss!";

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if (jsfiles.length <= 0) return console.log("No commands");

    console.log(`Loading ${jsfiles.length}`);
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} Loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", () => {
    bot.user.setActivity(`SweetSpot`, { type: "WATCHING" });
    console.log("SweetSpotTM is online!");
});

bot.on("message", (msg) => {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;

    let messageArray = msg.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);


    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, msg, args);

    //test case
});

bot.token = process.env.token;
bot.login();