import Elysia from 'elysia';
import { IElysiaPlugin, PluginType } from 'types';

export class ElysiaPlugin extends Elysia implements IElysiaPlugin {
  pluginType: PluginType;
  
  constructor(pluginType: PluginType) {
    super();
    this.pluginType = pluginType;
  }

  toString() {
    return `ElysiaPlugin (${this.pluginType})`;
  }
}

