const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
   data: new SlashCommandBuilder()
      .setName('user')
      .setDescription('All about you!'),
   async execute(interaction) {
      await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}\nYou account was created: ${interaction.user.createdAt}`);
   },
};