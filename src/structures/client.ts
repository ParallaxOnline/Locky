import CookiecordClient from 'cookiecord';
import { modules } from '../modules';

export class Client extends CookiecordClient {
  constructor() {
    super({
      prefix: '!',
    }, {
      cachePresences: false,
      cacheEmojis: false,
    });

    // Register modules
    for (let i = 0; i !== modules.length; ++i) this.registerModule(modules[i]); 
  }
}