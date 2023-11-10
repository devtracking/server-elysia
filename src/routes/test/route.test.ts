import { RouteInfo } from '../../types';
import RouteBuilder from '../../utils/builders/builder.route';

const testRoute = RouteBuilder('/test');

testRoute.plugin.get('/test', ({}) => {
  return {
    message: 'Hello World',
  };
});

export default testRoute;
