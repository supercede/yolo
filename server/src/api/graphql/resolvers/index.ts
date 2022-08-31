import { pubsub } from '@services/redis';
import type { Redis } from 'ioredis';
import { Constants } from '@app/types';

type Context = {
  redisClient: Redis;
};

const resolvers = {
  Query: {
    getEvents: async (_: any, __: any, ctx: Context) => {
      const queries = await ctx.redisClient.hgetall('event');
      const e = Object.keys(queries).map((key) => JSON.parse(queries[key]));
      return e;
    },
  },
  Subscription: {
    eventUpdate: {
      subscribe: () => {
        return pubsub.asyncIterator(Constants.UPDATE_EVENT);
      },
    },
  },
};

export default resolvers;
