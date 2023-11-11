export default class SocketSession {
  clients: Map<number, string>;
  constructor() {
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

