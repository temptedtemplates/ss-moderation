const Discord = require('discord.js');

module.exports.run = async(bot, msg, args) => {
    const helpEmbed = new Discord.RichEmbed()
        .setAuthor("SweetSpot", "https://i.imgur.com/skvRpRm.png")
        .setThumbnail("https://i.imgur.com/skvRpRm.png")
        .setColor('#42b0f5')
        .addField("Prefix", "ss!")
        .addField("Commands", `
        help
        ban
        kick
        ping
        report
        suggest`, true)
        .addField("Description", `
        Displays list of all commands!
        Mod command to ban a user
        Mod command to kick a user
        Command to check if bot is online
        Command to report a fellow user
        Command to make suggestions`, true);
    msg.author.sendMessage(helpEmbed);
}

module.exports.help = {
    name: "help"
}