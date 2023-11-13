import Elysia, { Handler } from 'elysia';
import type { RoutePlugin } from 'types';

class RouteHandler extends Elysia implements RoutePlugin {
  _path: string;
  constructor(path: string) {
    super();
    this._path = path;
  }
}

export { RouteHandler };
