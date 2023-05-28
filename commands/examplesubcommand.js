import { SlashCommandBuilder } from '@discordjs/builders';


export default {
    body: new SlashCommandBuilder()
        .setName('examplesubcommand')
        .setDescription('Commands with subcommands can\'t have their base command called')
        .addSubcommand(subcommand =>
            subcommand
            .setName('number')
            .setDescription('Enter a number, I\'ll give it back, I promise.')
            .addNumberOption(option => 
                option.setName('number')
                .setDescription('Enter number here')
                .setRequired(true))
            )
        .setDMPermission(false),
    onTriggered: async function(interaction) {
        if (interaction.options.getSubcommand() == 'number') {
            let number = interaction.options.getNumber('number');
            interaction.reply(`Here is your number back: `+number);
        }
    }   
};