const Discord = require("discord.js-selfbot");
const config = require("./config.json");
const token = config.token;
const client = new Discord.Client();
const chalk = require("chalk");

client.on("ready", async () => {
  console.clear();
  console.log(chalk.green.bold("Success!"));
  console.log(
    chalk.gray("Connected To"),
    chalk.hex("#8E8ACF")(`${client.user.tag}`)
  );

  client.user.setPresence({
    status: "dnd",// set status online,idle,dnd
    activity: {
      name: " ", //you can either leave blank or place in the same thing that you have below here
      details:"PLACE TEXT HERE",// this shows with the presence shit, dont know why it doesnt show with the name above 
      url: "https://twitch.tv/directory",//same for here as long as its a youtube/twitch stream
      type: "STREAMING",
    },
  });
});

client.login(token);
