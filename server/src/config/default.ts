import type { Config } from '.';
import { getEnvironmentValue } from '.';

const config: Config = {
  appName: 'yodds',

  env: getEnvironmentValue('NODE_ENV', 'development') as Config['env'],

  server: {
    port: Number(getEnvironmentValue('PORT', '5000')),
  },
};

export = config;
