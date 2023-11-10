import { Elysia } from 'elysia';
import testRoute from './test/route.test';

const allRoutes = [testRoute];

const routesPlugin = new Elysia();

allRoutes.forEach((route) => {
  routesPlugin.group(route.path, (app) => app.use(route.plugin));
});

export default routesPlugin;
