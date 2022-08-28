import { config } from '@app/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
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

export const pubsub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options),
  connectionListener: (err) => {
    err ? console.log(err) : console.log('connected');
  },
});

export const redisClient = new Redis(options);

redisClient.on('connection', () => {
  logger.info('redis connected');
});
