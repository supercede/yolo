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

import typeDefs from './graphql/typedefs';
import resolvers from './graphql/resolvers';
import { config } from '../config';
import { logger } from './utils/logger';

dotenv.config();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const isDevelopment = config.env === 'development';

export const apolloConfig = (server: http.Server) => ({
  schema,
  csrfPrevention: config.env === 'production',
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer: server })],
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
    res.send('Welcome to the beginning of everything');
  });

  const httpServer = http.createServer(app);

  const server = new ApolloServer(apolloConfig(httpServer));

  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  logger.info(
    `⚡️[server]: Server is running at http://localhost:${port}${server.graphqlPath}`
  );
};

export default server;
