import { Config, getEnvironmentValue } from '@app/config';
import { DeepPartial, Environment } from '@app/config/environments/types';

export const config: DeepPartial<Config> = {
  env: Environment.Test,

  server: {
    port: Number(getEnvironmentValue('PORT', '5555')),
  },
};
