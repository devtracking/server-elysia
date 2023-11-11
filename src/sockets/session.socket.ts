import { Elysia } from 'elysia';
import SocketSession from '@/handlers/socket/session.handler';

const session = new SocketSession();

const socket = new Elysia().ws('/wstest', {
  open(ws) {
    console.log(ws.data.query);
    session.addSession(ws.id, 'session');
  },
  message(ws, message) {
    ws.send(message);
  },
});

export default socket;