// Initialize using Discord.js
const Discord = require('discord.js');
const { token } = require('./config.json');

const bot = {
	client,
	prefix: 'w.',
	owners: ['145650760816787456'],
};

const client = new Discord.Client({
	intents: [
		'GUILDS',
		'GUILD_MESSAGES',
	],
});

client.once('ready', () => {
	console.log(`Logged in as ${bot.client.user.tag}`);
});

client.login(token);

