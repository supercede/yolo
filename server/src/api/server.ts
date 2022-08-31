import 'module-alias/register';

import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Express, Response } from 'express';
import dotenv from 'dotenv';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

import typeDefs from './graphql/typedefs';
import resolvers from './graphql/resolvers';
import { config } from '../config';
import { logger } from './utils/logger';
import { Disposable } from 'graphql-ws';
import { initExternalWS } from '@app/api/ws/external';
import { redisClient } from '@services/redis';

dotenv.config();

const isDevelopment = config.env === 'development';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const apolloConfig = (
  server: http.Server,
  serverCleanup: Disposable
) => ({
  schema,
  context: () => ({ redisClient }),
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer: server }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
  introspection: true,
  playground: true,
});

const server = async () => {
  const app: Express = express();

  app.use(cors());

  app.use(express.json());
  app.use(morgan('dev'));
  app.use(
    helmet({
      crossOriginEmbedderPolicy: !isDevelopment,
      contentSecurityPolicy: !isDevelopment,
    })
  );

  const port = config.server.port;

  app.get('/', (_, res: Response) => {
    res.send(
      'Welcome traveller. Please visit https://studio.apollographql.com/public/yodds/schema/reference?variant=current to query this server'
    );
  });

  initExternalWS();

  const httpServer = http.createServer(app);

  const wsServer = new WebSocketServer({
    // This is the `httpServer` we created in a previous step.
    server: httpServer,
    // Pass a different path here if your ApolloServer serves at
    // a different path.
    path: '/graphql',
  });

  // Hand in the schema we just created and have the
  // WebSocketServer start listening.
  const serverCleanup = useServer(
    {
      schema,
      onConnect: async () => {
        logger.info('Connected to websocket server');
      },
      onDisconnect(ctx, code, reason) {
        logger.info('Disconnected from ws server! %s, %s', code, reason);
      },
      onError(ctx, msg, errors) {
        logger.error('Error! %s %s', msg, errors);
      },
    },
    wsServer
  );

  const server = new ApolloServer(apolloConfig(httpServer, serverCleanup));

  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  logger.info(
    `⚡️[server]: Server is running at http://localhost:${port}${server.graphqlPath}`
  );
};

export default server;
