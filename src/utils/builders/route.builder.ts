import Elysia from 'elysia';
import type { RouteInfo } from 'types';

class RouteBuilder {
  path: string;
  plugin: Elysia;
  constructor(path: string) {
    this.path = path;
    this.plugin = new Elysia();
  }
}

export default RouteBuilder;
