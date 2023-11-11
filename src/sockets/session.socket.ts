import { Elysia } from 'elysia';
import SocketSession from '@/handlers/socket/session.handler';

const session = new SocketSession();

const socket = new Elysia().ws('/wstest', {
  open(ws) {
    console.log(ws.data.query);
    session.addClient(ws.id, 'SUPER_SECRET_DATABASE_IDENTIFIER');
  },
  message(ws, message) {
    ws.send(message);
  },
});

export default socket;