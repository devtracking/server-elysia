import { ElysiaPlugin } from './elyisa-plugin.module';
import { IHttpPlugin, PluginType } from 'types';

export class SocketPlugin extends ElysiaPlugin implements IHttpPlugin {
  constructor() {
    super('http');
  }
}
