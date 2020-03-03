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

    if(msg.startsWith(prefix + "info1")) {
        if (mention == null) { return; }
        message.delete();
        var info1 = new Discord.RichEmbed()
        .setTitle("Important Announcement")
        .setDescription("Hello, my name is <@474239530489085954> I am going to take a 1 day break off do not bother me all DM,s are closed until tommorow.")
        .setColor(0xffffff);
        mention.sendEmbed(info1)
    }
})

bot.login("Njg0MjM0NTM4MjAwNzI3NjQ2.Xl3PaA.QS3xf3BI_I0PP4-p5pnAA1R_ebg");
