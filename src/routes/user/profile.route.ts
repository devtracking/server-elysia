import { RouteHandler } from '@handlers/index';

const profileRoute = new RouteHandler('/profile');

profileRoute.get('/', ({}) => {
  console.log('Hello World!');
  return 'Hello World!';
});

profileRoute.post('/', ({}) => {
  console.log('Hello World!');
  return 'Hello World!';
});

profileRoute.put('/', ({}) => {
  console.log('Hello World!');
  return 'Hello World!';
});

profileRoute.delete('/', ({}) => {
  console.log('Hello World!');
  return 'Hello World!';
});

profileRoute.patch('/', ({}) => {
  console.log('Hello World!');
  return 'Hello World!';
});

profileRoute.get('/test', ({}) => {
  console.log('Hello World!');
  return 'Hello World!';
});

console.log('Registered all Routes');

profileRoute.dbgPrintRoutes();

export { profileRoute };
