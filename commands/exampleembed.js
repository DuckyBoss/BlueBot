import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';

export default {
    body: new SlashCommandBuilder()
        .setName('exampleembed')
        .setDescription('Posts the specified embed in the channel where the command was sent.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Name of the desired embed.')
                .setRequired(true)
                .addChoices(
                    { name: 'A cool embed I guess', value: 'whatever' },
                ))
        .setDefaultMemberPermissions(0)
        .setDMPermission(false),
    onTriggered: async function(interaction) {
        const embed = interaction.options.getString('name')
        if (embed == 'whatever') {
            const embed = new EmbedBuilder()
            .setTitle('CS2A')
            .setColor('#1b2956')
            .setURL('https://odu.campusgroups.com/cs2a/home/')
            .setFooter({text:'BlueBot | Made by CS2A Bot Developers', iconURL:'https://raw.githubusercontent.com/Cybersecurity-Student-Association/BlueBot/main/assets/CS2A.png'})
            .setThumbnail('https://raw.githubusercontent.com/Cybersecurity-Student-Association/BlueBot/main/assets/CS2A.png')
            .setAuthor({name:'BlueBot', iconURL:'https://raw.githubusercontent.com/Cybersecurity-Student-Association/BlueBot/main/assets/CS2A.png'})
            .setDescription('Look! Text!')
            .addFields(
             {name: 'A wild field appears!',value: 'It has text in it!'},
             {name: 'Inline 1',value: 'Inline field 1', inline: true},
             {name: 'Inline 2',value: 'Inline field 2', inline: true},
                     )
            interaction.channel.send({embeds:[embed]});
            interaction.reply({content: `Embed posted.`,ephemeral: true})
        }
    }   
};
