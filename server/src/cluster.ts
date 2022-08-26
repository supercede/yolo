import 'module-alias/register';
import os from 'os';
import throng from 'throng';
import server from '@app/api/server';
import { logger } from './api/utils/logger';

const startApplication = (): void => {
  void server().catch((err: Error) =>
    logger.fatal({ err }, 'bootstraping error')
  );
};

const startWorkerProcess = (id: number): void => {
  logger.info(`Started worker ${id.toString()}.`);
  startApplication();
};

const startMasterProcess = (): void => {
  logger.info('Master process started.');
};

throng({
  count: os.cpus().length,
  grace: 3000,
  master: startMasterProcess,
  start: startWorkerProcess,
});
