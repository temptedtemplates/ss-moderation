const Discord = require('discord.js');

module.exports.run = async(bot, msg, args) => {
    let suggest = args.join(" ");
    const suggestion = new Discord.RichEmbed()
        .setAuthor("SweetSpot", "https://i.imgur.com/skvRpRm.png")
        .setColor('#42b0f5')
        .setThumbnail("https://i.imgur.com/skvRpRm.png")
        .addField("Suggestor", msg.author.toString())
        .addField("Suggestion", suggest);
    const suggestChannel = msg.guild.channels.find("name", "suggestions");
    suggestChannel.sendMessage(suggestion);
    msg.delete(1000);
}

module.exports.help = {
    name: "suggest"
}