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
      name: "Fucked By Jay", //Replace with whatever you want here
      url: "https://twitch.tv/directory",//same for here as long as its a youtube/twitch stream
      type: "STREAMING",
    },
  });
});

client.login(token);
