import Elysia from 'elysia';
import type { RouteInfo } from '../../types';

const RouteBuilder = (path: string): RouteInfo => {
  const plugin = new Elysia();
  const routeInfo: RouteInfo = {
    path,
    plugin,
  };
  return routeInfo;
};

export default RouteBuilder;