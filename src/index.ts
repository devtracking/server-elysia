import { Elysia } from 'elysia';
import { outputUtils } from '@utils/index';

const app = new Elysia().listen(3000);

outputUtils.info('Server running at http://localhost:3000');
