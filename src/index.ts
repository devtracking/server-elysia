import { Elysia } from 'elysia';
import routesPlugin from './plugins/routes.plugin';
import socket from './sockets/session.socket';

const app = new Elysia().use(routesPlugin).use(socket).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
