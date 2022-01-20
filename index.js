// Initialize using Discord.js
const Discord = require('discord.js');
const fs = require('fs');
const { token } = require('./config.json');

const client = new Discord.Client({
	intents: [
		'GUILDS',
		'GUILD_MESSAGES',
	],
});

const bot = {
	client,
	prefix: 'w.',
	owners: ['145650760816787456'],
};

client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log(`Logged in as ${bot.client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong! 🏓');
	}
	else if (commandName === 'pong') {
		await interaction.reply('🏓 Ping!');
	}
	else if (commandName === 'server') {
		await interaction.reply(`Welcome to Sofia's server!\nServer name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nServer created: ${interaction.guild.createdAt}`);
	}
	else if (commandName === 'wordle') {
		await interaction.reply('Wordle!');
	}
	else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}\nYou account was created: ${interaction.user.createdAt}`);
	}
});

client.login(token);