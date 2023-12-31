import Elysia from 'elysia';
import { InputSchema } from 'elysia';
import type { SocketPlugin } from 'types';

class SocketHandler extends Elysia implements SocketPlugin {
  clients: Map<number, string>;

  constructor() {
    super();
    this.clients = new Map<number, string>();
  }

  addClient(id: number, session: string) {
    this.clients.set(id, session);
  }

  getClient(id: number) {
    return this.clients.get(id);
  }

  removeClient(id: number) {
    this.clients.delete(id);
  }
}

export { SocketHandler };
