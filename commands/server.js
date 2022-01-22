const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
   data: new SlashCommandBuilder()
      .setName('pong')
      .setDescription('Replies with server info!'),
   async execute(interaction) {
      await interaction.reply(`Welcome to Sofia's server!\nServer name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nServer created: ${interaction.guild.createdAt}`);
   },
};