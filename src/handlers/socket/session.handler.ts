export default class SocketSession {
  sessions: Map<number, string>;
  constructor() {
    this.sessions = new Map<number, string>();
  }

  addSession(id: number, session: string) {
    this.sessions.set(id, session);
  }

  getSession(id: number) {
    return this.sessions.get(id);
  }

  removeSession(id: number) {
    this.sessions.delete(id);
  }
}

