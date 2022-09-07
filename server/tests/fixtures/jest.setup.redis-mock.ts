import Redis from 'ioredis-mock';

jest.mock('../../src/api/services/redis', () => {
  return {
    pubsub: {
      //@ts-ignore

      publisher: new Redis(),
      //@ts-ignore

      subscriber: new Redis(),
    },
    //@ts-ignore

    redisClient: new Redis(),
  };
});

jest.mock('ws', () => ({
  WebSocket: jest.fn(() => ({
    on: jest.fn(),
  })),
  WebSocketServer: jest.fn(() => ({
    on: jest.fn(),
    once: jest.fn(),
  })),
}));

jest.mock('graphql-ws/lib/use/ws', () => ({
  useServer: jest.fn(),
}));
