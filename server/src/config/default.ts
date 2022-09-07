import type { Config } from '.';
import { getEnvironmentValue } from '.';

export const config: Config = {
  appName: 'yodds',

  env: getEnvironmentValue('NODE_ENV', 'development') as Config['env'],

  server: {
    port: Number(getEnvironmentValue('PORT', '5000')),
  },

  auth: {
    username: getEnvironmentValue('WS_USERNAME'),
    password: getEnvironmentValue('WS_PASSWORD'),
  },

  redis: {
    host: getEnvironmentValue('REDIS_HOST', 'localhost'),
    port: Number(getEnvironmentValue('REDIS_PORT', '6379')),
    password: getEnvironmentValue('REDIS_PASSWORD', ''),
  },
};
