import pino from 'pino';
import * as R from 'ramda';
import { config } from '@app/config';

const dest = process.stdout;

const options: pino.LoggerOptions = {
  enabled: true,
  level: 'info',
  name: config.appName,
  serializers: R.omit(['wrapResponseSerializer'], pino.stdSerializers),
};

export const logger = pino(options, dest);
