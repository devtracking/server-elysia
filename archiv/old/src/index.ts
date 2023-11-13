import { Elysia } from 'elysia';
import modules from './modules';
import output from '@utils/output.utils';

const app = new Elysia().use(modules).listen(3000);

output.info(
  `🦊 DevTrack is running at ${app.server?.hostname}:${app.server?.port}`,
);
