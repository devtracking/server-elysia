import Elysia, { Handler } from 'elysia';
import type { RouteInfo, RoutePlugin } from 'types';
import { logInfo } from '@utils/output.utils';

class RouteHandler implements RoutePlugin {
  path: string;
  plugin: Elysia;
  routes: RouteInfo[];

  constructor(path: string) {
    this.path = path;
    this.plugin = new Elysia();
    this.routes = [];
  }

  dbgPrintRoutes() {
    logInfo(`Routes for ${this.path}:`);
    this.routes.forEach((route) => {
      logInfo(`  ${route.method.toUpperCase()} ${route.path}`);
    });
  }

  //#region Http Methods
  get(route: string, handler: Handler) {
    this.plugin.get(this.path, handler);
    this.routes.push({ path: route, method: 'get' });
    return this;
  }

  post(route: string, handler: Handler) {
    this.plugin.post(this.path, handler);
    this.routes.push({ path: route, method: 'post' });
    return this;
  }

  put(route: string, handler: Handler) {
    this.plugin.put(this.path, handler);
    this.routes.push({ path: route, method: 'put' });
    return this;
  }

  delete(route: string, handler: Handler) {
    this.plugin.delete(this.path, handler);
    this.routes.push({ path: route, method: 'delete' });
    return this;
  }

  patch(route: string, handler: Handler) {
    this.plugin.patch(this.path, handler);
    this.routes.push({ path: route, method: 'patch' });
    return this;
  }
  //#endregion
}

export { RouteHandler };
