/* If you need to access your client instance from inside a command file,
 * you can access it via interaction.client. If you need to access external
 * files, packages, etc., you should require() them at the top of the file. */

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
   data: new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Replies with Pong!'),
   async execute(interaction) {
      await interaction.reply('Pong! 🏓');
   },
};