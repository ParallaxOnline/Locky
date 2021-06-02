import CookiecordClient, { Module, command, listener } from 'cookiecord';
import { Message } from 'discord.js-light';

export class UtilityModule extends Module {
  constructor(client: CookiecordClient) {
    super(client);
  }

  @listener({ event: 'ready' })
  ready() {
    console.log('Recieved READY. Booting up...');
    this.client.user!.setActivity('your server!', { type: 'WATCHING' });
    console.log('READY Completed. Bot is online!');
  }

  @command()
  async ping(msg: Message) {
    const message = await msg.channel.send('Pinging...');
    const diff = Math.round(message.createdTimestamp - msg.createdTimestamp);
    const shard = Math.round(this.client.ws.ping);

    message.edit(`Heartbeat: **${shard}ms** | Roundtrip: **${diff}ms**`);
  }
}