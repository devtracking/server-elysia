import { ElysiaPlugin } from './elyisa-plugin.module';
import { ISocketPlugin, PluginType } from 'types';

export class SocketPlugin extends ElysiaPlugin implements ISocketPlugin {
  readonly clients: Map<number, string>;

  constructor() {
    super('ws');
    this.clients = new Map<number, string>();
  }

  addClient(client: any) {
    this.clients.set(client.id, client.session);
  }

  getClient(id: number) {
    return this.clients.get(id);
  }

  removeClient(id: number) {
    this.clients.delete(id);
  }
}