import { SlashCommandBuilder } from '@discordjs/builders';

export default {
    body: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pings BlueBot')
        .setDMPermission(false),
    onTriggered: async function(interaction) {
        interaction.reply(`Pong!`);
    }   
};