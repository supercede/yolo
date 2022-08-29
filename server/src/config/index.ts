// eslint-disable-next-line
require('dotenv').config();
import { config as dotenvConfig } from 'dotenv';
import * as R from 'ramda';
import { Environment } from './environments/types';

dotenvConfig();

const env = process.env.NODE_ENV ?? 'development';

export interface Config {
  appName: string;

  env: Environment;

  server: {
    port: number;
  };

  auth: {
    username: string;
    password: string;
  };

  redis: {
    host: string;
    port: number;
    password: string;
  };
}

export const getEnvironmentValue = (
  key: string,
  defaultValue?: string
): string => {
  const envVal = process.env[key] ?? defaultValue;

  if (!envVal) {
    throw new Error(`env variable ${key} has to be defined`);
  }

  return envVal;
};

/* eslint-disable */
const envConfig = require(`./environments/${env}`);
const defaultConfig = require('./default');
/* eslint-enable */

/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
export const config = R.mergeDeepRight(
  defaultConfig,
  envConfig
) as object as Config;
