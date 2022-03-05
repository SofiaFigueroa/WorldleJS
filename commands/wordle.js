const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');

const wait = require('util').promisify(setTimeout);
const myURL = 'https://cdn.discordapp.com/avatars/145650760816787456/498a1f23afe042ddaa09f0741b7a0735.webp';

// Create the gameBoard
const gameBoard = new MessageEmbed()
	.setColor('#b494d3')
	.setTitle('WordleJS')
	.setDescription('Timer: 5 Minutes. Emoji are correct.')
	.setAuthor({ name: 'Sofia#5313', iconURL: myURL, url: 'https://twitter.com/SoFiggy' })
	.addFields(
		{ name: '\u200b', value: '[H] 🇦 [**M**] [P] [D]' },
		{ name: '\u200b', value: '[R] 🇦 [**N**] [**T**] [S]' },
		{ name: '\u200b', value: '[C] 🇦 [**N**] [**T**] [S]' },
		{ name: '\u200b', value: '[T] 🇦 [**F**] [E] 🇹' },
		{ name: '\u200b', value: '🇫 🇦 [B] [E] 🇹' },
		{ name: '\u200b', value: '🇫 🇦 🇮 🇳 🇹' },
	)
	.setTimestamp()
	.setFooter({ text: 'v0.1beta' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription('Play a game!')
		.addStringOption(option =>
			option.setName('name')
				.setDescription('Which game?')
				.setRequired(true)
				.addChoice('wordle', 'wordle')),
	async execute(interaction) {

		function wordFilter() {
			console.log('Went through word filter!');
			return true;
		}

		// interaction.reply('Welcome to Wordle! Begin guessing (5 minute timer)!');
		interaction.reply({ embeds: [gameBoard] });
		// interaction.channel.send({ embeds: [gameBoard] });
		// interaction.deleteReply();
		await wait(1000);

		// const filter = m => m.content.includes('start');
		const collector = interaction.channel.createMessageCollector({ wordFilter, time: 300000 });

		collector.on('collect', m => {

			// Log the collected message
			console.log(`Collected ${m.content}`);

			// Check if the message is the correct word
			if (m.content.includes('ratio')) {
				const exampleEmbed = new MessageEmbed(gameBoard)
					.setTitle('A winner is you')
					.setDescription('yay');

				exampleEmbed.fields = [];

				interaction.editReply({ embeds: [exampleEmbed] });

			}

			// const receivedEmbed = interaction.channel.Message.embed[0];

			// if (m.content.includes('ratio')) {
			// 	const exampleEmbed = new MessageEmbed(gameBoard)
			// 		.setTitle('A winner is you')
			// 		.setDescription('yay');

			// 	interaction.channel.send({ embeds: [exampleEmbed] });
			// 	collector.stop();
			// }
		});

		collector.on('end', collected => {
			console.log(`Collected ${collected.size} items`);
		});
	},
};
