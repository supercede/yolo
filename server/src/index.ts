import 'module-alias/register';
import server from '@app/api/server';
import { logger } from '@app/api/utils/logger';
import { config } from '@app/config';

void server()
  .then((httpServer) => {
    httpServer.listen({ port: config.server.port }, () => {
      logger.info(
        `⚡️[server]: Server is running at http://localhost:${config.server.port}/graphql`
      );
    });
  })
  .catch((err) => logger.fatal({ err }, 'bootstraping error'));
