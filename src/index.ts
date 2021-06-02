import { Client } from "./structures/client";

const client = new Client();

client.login(process.env.BOT_TOKEN);