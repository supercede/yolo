import type { Redis } from 'ioredis';
type Context = {
  redisClient: Redis;
};
const resolvers = {
  Query: {
    getEvents: async (ctx: Context) => {
      const queries = await ctx.redisClient.hgetall('event');
      const d = Object.keys(queries).map((key) => JSON.parse(queries[key]));
      return d;
    },
  },
  Mutation: {},
};

export default resolvers;
