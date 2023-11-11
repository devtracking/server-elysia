import { Elysia } from 'elysia';
import routes from '@routes/index';

const routesPlugin = new Elysia();

routes.forEach((route) => {
  routesPlugin.group(route.path, (app) => app.use(route.plugin));
});

export default routesPlugin;