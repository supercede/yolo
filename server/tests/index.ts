import * as request from 'request-promise';
import server from '../src/api/server';
import { config } from '@app/config';

export const startTestServer = async () => {
  const graphqlServer = await server();
  graphqlServer.listen(config.server.port, () => {
    console.log(
      `Test server is running at http://localhost:${config.server.port}`
    );
  });

  return graphqlServer;
};

export const requestGraphql = async (query: any) => {
  const r = await request.post(
    `http://localhost:${config.server.port}/graphql`,
    {
      json: true,
      body: { query },
    }
  );
  return Promise.resolve(r);
};
