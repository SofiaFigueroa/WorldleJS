// Initialize using Discord.js
const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
   intents: [
      "GUILDS",
      "GUILD_MESSAGES"
   ]
})

// Add event listeners
// Ready
client.on("ready",() => {
   console.log(`Logged in as ${client.user.tag}`)
})

// Message Create
client.on("messageCreate", (message) => {
   switch (message.content) {
      case "!ping":
         message.reply("Pong! 🥰")
         break;

      case "!pong":
         message.reply("Ping! 😲")
         break;
   
      default:
         break;
   }
})

client.login(process.env.TOKEN)

