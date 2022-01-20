const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
   data: new SlashCommandBuilder()
      .setName('wordle')
      .setDescription('Start your WordleJS Game!'),
   async execute(interaction) {
      await interaction.reply('Wordle!');
   },
};