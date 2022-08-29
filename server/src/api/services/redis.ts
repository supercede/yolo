import { config } from '@app/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis, { RedisOptions } from 'ioredis';
import { logger } from '../utils/logger';

let options: RedisOptions = {
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
  retryStrategy: (times) => {
    // reconnect after
    return Math.min(times * 50, 2000);
  },
};

if (config.env === 'production') {
  options = {
    ...options,
    tls: { rejectUnauthorized: false },
  };
}

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
