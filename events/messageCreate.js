const Discord = require("discord.js")

// Runs whenever messageCreate is called for various commands
module.exports = {
   name: "messageCreate",
   run: async function runAll(bot, message) {
      const {client, prefix, owners} = bot

      if (!message.guild) return
      if (message.author.bot) return
      if (!message.content.startsWith(prefix)) return

      const args = message.content.slice(prefix.length).trim().split(/ +/g)
      const cmdstr = args.shift().toLowerCase()

      // Is command in our list
      let command = client.commands.get(cmdstr)
      if (!command) return

      // Permission Check
      let member = message.member

      if (command.devOnly && !owners.includes(member.id))
      {
         return message.reply("This command is for bot owners only")
      }

      if (command.permissions && member.permissions.missing(command.permissions).length !== 0){
         return message.reply("You don't have permission to use this command!")
      }

      try {
         await command.run({...bot, message, args})
      } catch (err) {
         let errMsg = err.toString()
         // Add manual command
         if (errMsg.startswith("?")) {
            errMsg = errMsg.slice(1)
            await message.reply(errMsg)
         }
         else {
            console.error(err)
         }
      }
   }
}