import { requestGraphql, startTestServer } from '.';
import { WebSocket, WebSocketServer } from 'ws';
import { redisClient } from '@services/redis';
import data from './fixtures/data';

describe('startTestServer', () => {
  beforeAll(() => {
    redisClient.hset(
      'event',
      data.event.payload.id,
      JSON.stringify(data.event)
    );
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should start the server', async () => {
    const server = await startTestServer();

    expect(WebSocket).toHaveBeenCalledWith(
      expect.stringContaining('wss://sb-ws-mock-api.herokuapp.com?username=')
    );
    expect(WebSocketServer).toHaveBeenCalledWith(
      expect.objectContaining({ path: '/graphql' })
    );
    expect(server.listening).toBe(true);
  });

  it('should fetch events', async () => {
    const response = await requestGraphql(
      `
        query getEvents {
            getEvents {
                type
                payload {
                    id
                }
            }
        }
        `
    );

    const { data } = response;
    expect(data).toHaveProperty('getEvents');
    expect(data.getEvents).toHaveLength(1);
  });
});
