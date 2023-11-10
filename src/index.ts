import { Elysia } from 'elysia';
import routesPlugin from './plugins/plugin.routes';

const app = new Elysia().use(routesPlugin).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
