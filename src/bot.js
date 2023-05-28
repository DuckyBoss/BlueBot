import 'dotenv/config';
import client from './discordClient.js';

console.log("Logging into Discord.");
const TOKEN = process.env.DISCORD_TOKEN || "";
if (TOKEN.toString().trim() === "") {
    throw new Error("Invalid Discord access token configured.");
}

client.login(TOKEN);