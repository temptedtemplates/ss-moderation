const Discord = require('discord.js');

module.exports.run = async(bot, msg, args) => {
    let reported = msg.mentions.members.first();

    if (!reported) return msg.channel.send("User is not valid or arguments are not valid!");
    let reasonFr = args.join(" ").slice(22);
    const rEmbed = new Discord.RichEmbed()
        .setAuthor("SweetSpot","https://i.imgur.com/skvRpRm.png")
        .setColor('#42b0f5')
        .addField('Reported', reported.toString(), true)
        .addField('Reporter', msg.author.toString(), true)
        .setThumbnail("https://i.imgur.com/skvRpRm.png")
        .addField('Reason', reasonFr);
    const reportingChannel = msg.guild.channels.find("name", "investigate");
    reportingChannel.sendMessage(rEmbed);
    msg.delete(1000);
}

module.exports.help = {
    name: "report"
}