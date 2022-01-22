const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
   data: new SlashCommandBuilder()
      .setName('wordle')
      .setDescription('Start your WordleJS Game!'),
   async execute(interaction) {
      interaction.reply('Please enter more input.').then(() => {
         const filter = m => interaction.user.id === m.author.id;

         interaction.channel.awaitMessages({ filter, time: 60000, max: 1, errors: ['time'] })
            .then(messages => {
               interaction.followUp(`You've entered: ${messages.first().content}`);
            })
            .catch(() => {
               interaction.followUp('You did not enter any input!');
            });
      });
   },
};