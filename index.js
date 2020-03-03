const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`INDEX.JS | ${bot.user.username} has logged in.`)
    bot.user.setActivity(`${bot.user.username} | ${bot.guilds.size} servers`, {type: "WATCHING"});
})

bot.on("message", (message) => {
    var prefix = "!";

    var msg = message.content.toLowerCase();

    if (message.author.bot) return;

    var mention = message.mentions.users.first();
    var file1_1 = new Discord.Attachment("./Files/EmergencySet.rbxm");

    if(msg.startsWith(prefix + "info1")) {
        if(!message.member.roles.find(r => r.name === "Chief Executive Officer")) return message.channel.sendMessage("Seriosly dude atleast you tried good sport :) but this command is only for Sean")
        if (mention == null) { return; }
        message.delete();
        var file1 = new Discord.RichEmbed()
        .setTitle("Important Announcement")
        .setDescription("Hello, my name is <@474239530489085954> I am going to take a 1 day break off do not bother me all DM,s are closed until tommorow.")
        .setColor(0xffffff);
    }
})

bot.login("Njg0MjM0NTM4MjAwNzI3NjQ2.Xl3JbQ.B8eC0PytFwHSxZ7mpbkHWQh6bPk");
