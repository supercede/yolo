import { config } from '@app/config';
import Redis, { RedisOptions } from 'ioredis';
import { logger } from '../utils/logger';

const options: RedisOptions = {
  host: config.redis.host,
  port: config.redis.port,
  retryStrategy: (times) => {
    // reconnect after
    return Math.min(times * 50, 2000);
  },
};

export const redisClient = new Redis(options);

redisClient.on('connection', () => {
  logger.info('redis connected');
});
