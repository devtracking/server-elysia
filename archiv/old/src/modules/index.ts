import output from '@/utils/output.utils';
import Elysia from 'elysia';
import fs from 'fs';
import path from 'path';

const instance = new Elysia();

output.progress('Loading modules...');

// load all routes from the routes folder and their subfolders
output.progress('Loading routes...');
const routes = fs.readdirSync(path.join(__dirname, './routes'));
routes.forEach((route) => {
  instance.use(require(`@modules/routes/${route}`).default);
});

// load all sockets from the sockets folder and their subfolders
output.progress('Loading sockets...');
// use fs to loop over sockets directory and load all sockets
const sockets = fs.readdirSync(path.join(__dirname, './sockets'));
sockets.forEach((socket) => {
  instance.use(require(`@modules/sockets/${socket}`).default);
});

output.success('All modules loaded successfully!');

export default instance;
