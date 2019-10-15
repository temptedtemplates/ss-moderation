const Discord = require('discord.js');

module.exports.run = async(bot, msg, args) => {
    let reason = args.join(" ").slice(22);
    let pINQ = msg.mentions.members.first();
    if (msg.member.roles.some(role => role.name === 'Moderator')) {
        if (!reason) return msg.channel.sendMessage("Check your reasons!");
        if (!pINQ) return msg.channel.sendMessage("Check your ban user!");
        const banEmbed = new Discord.RichEmbed()
            .setAuthor("SweetSpot", "https://i.imgur.com/skvRpRm.png")
            .setColor('#42b0f5')
            .setThumbnail("https://i.imgur.com/skvRpRm.png")
            .addField("Moderator", msg.author.toString())
            .addField("Banned", pINQ.toString())
            .addField("Reason", reason);
        let banLogs = msg.guild.channels.find("name", "ban-logs");
        banLogs.sendMessage(banEmbed);
        pINQ.ban(reason);
        const confEmbed = new Discord.RichEmbed()
            .setAuthor("SweetSpot", "https://i.imgur.com/skvRpRm.png")
            .setColor('#42b0f5')
            .setTitle("You banned this person!")
            .setThumbnail("https://i.imgur.com/skvRpRm.png")
            .addField("Moderator", msg.author.toString())
            .addField("Banned", pINQ.toString())
            .addField("Reason", reason);
        msg.author.sendMessage(confEmbed);
    } else if (msg.member.roles.some(role => role.name === 'Admin')) {
        if (!reason) return msg.channel.sendMessage("Check your reasons!");
        if (!pINQ) return msg.channel.sendMessage("Check your ban user!");
        const banEmbed = new Discord.RichEmbed()
            .setAuthor("SweetSpot", "https://i.imgur.com/skvRpRm.png")
            .setColor('#42b0f5')
            .setThumbnail("https://i.imgur.com/skvRpRm.png")
            .addField("Moderator", msg.author.toString())
            .addField("Banned", pINQ.toString())
            .addField("Reason", reason);
        let banLogs = msg.guild.channels.find("name", "ban-logs");
        banLogs.sendMessage(banEmbed);
        pINQ.ban(reason);
        const confEmbed = new Discord.RichEmbed()
            .setAuthor("SweetSpot", "https://i.imgur.com/skvRpRm.png")
            .setColor('#42b0f5')
            .setTitle("You banned this person!")
            .setThumbnail("https://i.imgur.com/skvRpRm.png")
            .addField("Moderator", msg.author.toString())
            .addField("Banned", pINQ.toString())
            .addField("Reason", reason);
        msg.author.sendMessage(confEmbed);
    }
}

module.exports.help = {
    name: "ban"
}