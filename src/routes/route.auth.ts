import RouteBuilder from '@builders/builder.route';
import { Response } from 'types';

const authRoute = new RouteBuilder('/auth');

authRoute.plugin.get('/login', ({}): Response => {
  return {
    status: 200,
    message: 'Login',
  };
});

export default authRoute;
