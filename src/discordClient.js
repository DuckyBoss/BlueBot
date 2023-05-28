import { Client, GatewayIntentBits, InteractionType } from "discord.js";
import registeredCommands from "./registeredCommands.js";

const client = new Client({ 
    intents: [ 
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

client.once('ready', async () =>  {
    console.log("BlueBot has logged in.");
    client.user.setPresence({ activities: [{ name: 'I\'m blue, da ba dee da ba di' }] });
    console.log("Registering discord commands.");
    registeredCommands.forEach(async command => {
        await client.application.commands.create(command.body.toJSON(), process.env.PROD ? undefined : process.env.GUILD);
    });
    client.on('interactionCreate', async interaction => {
        if (interaction.type != InteractionType.ApplicationCommand) return;
        const { commandName } = interaction;
        //We do another forEach here instead of checking in the above foreach
        //The interactionCreate was run with each command before, causing memory issues
        registeredCommands.forEach(async command =>  {
        if (commandName === command.body.name) {
            await command.onTriggered(interaction);
        }
    });
    });
    client.on('messageCreate', message => {
        if (message.mentions.users.get('1112401613408182322') && !message.author.bot) {
           message.reply("Don't @ me.");
           }
        if (message.content.toLowerCase() === 'inertia') {
           message.reply('Inertia is a property of matter.');
           }
    });
    console.log("Discord commands registered, BlueBot is ready for use.")
});

export default client;