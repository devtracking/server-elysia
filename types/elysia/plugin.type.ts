type PluginType = 'http' | 'ws';

type IElysiaPlugin = {
  pluginType: PluginType;
};

export { PluginType, IElysiaPlugin };
