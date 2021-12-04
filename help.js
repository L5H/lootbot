const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async (client, message, args) => {
    message.delete();

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${client.user.username} Cmds`)
      .setDescription(
        `Use ${Prefix}Help <Command Name> For More Cmds ` +
          "\n\n**Fun**\n`Avatar, Coinflip, Howgay, 8=, Dicksize, Choose, Hack, Randomnumber`" +
          "\n\n" +
          "**Moderation**\n`Clear, Mute, Unmute, Tempmute, Kick, Ban, Unban, Tempban, Warn, Warnings, ResetWarns`" +
          "\n\n" +
          "**Information**\n`Help, Userinfo, Serverinfo, nuke_loot1337`"
      )
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
