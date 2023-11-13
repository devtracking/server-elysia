import { SocketHandler } from '@/handlers';
import output from '@/utils/output.utils';

const session = new SocketHandler();

session.ws('/ws', {
  message(ws, message) {
    ws.send(message);
  },
});

export default session;
