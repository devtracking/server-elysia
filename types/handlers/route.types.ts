import Elysia from 'elysia';
import type { Handler } from 'elysia';

export type RoutePlugin = {
  path: string;
  plugin: Elysia;
  routes: RouteInfo[];
  dbgPrintRoutes: () => void;
  get: (route: string, handler: Handler) => RoutePlugin;
  post: (route: string, handler: Handler) => RoutePlugin;
  put: (route: string, handler: Handler) => RoutePlugin;
  delete: (route: string, handler: Handler) => RoutePlugin;
  patch: (route: string, handler: Handler) => RoutePlugin;
};

export type RouteInfo = {
  path: string;
  method: HttpMethods;
};

export type HttpMethods = 'get' | 'post' | 'put' | 'delete' | 'patch';
