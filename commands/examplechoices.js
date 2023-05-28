import { SlashCommandBuilder } from '@discordjs/builders';

export default {
    body: new SlashCommandBuilder()
        .setName('examplechoices')
        .setDescription('Example with choices.')
        .addStringOption(option =>
            option.setName('choice')
                .setDescription('Chosen choice')
                .setRequired(true)
                .addChoices(
                    { name: 'One', value: 'one' },
                    { name: 'Two', value: 'two' },
                ))
        .setDMPermission(false),
    onTriggered: async function(interaction) {
        const choice = interaction.options.getString('choice')
        if (choice== 'one') {
            interaction.reply(`One is the loneliest number that you'll ever do.`);
        }
        if (choice== 'two') {
            interaction.reply(`Two can be as bad as one, it's the loneliest number since the number one.`);
        }
    }   
};