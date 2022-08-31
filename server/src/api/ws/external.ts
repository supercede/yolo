import { logger } from '@app/api/utils/logger';
import { config } from '@app/config';
import { Event, Constants } from '@app/types';
import { pubsub, redisClient } from '@services/redis';
import { WebSocket } from 'ws';

export const initExternalWS = () => {
  const ws = new WebSocket(
    `wss://sb-ws-mock-api.herokuapp.com?username=${config.auth.username}&password=${config.auth.password}`
  );

  ws.on('open', function open() {
    logger.info('External websocket server OPEN');
    ws.send('{"type":"recovery"}');
  });

  ws.on('message', function message(data) {
    const c = data.toString();

    if (c.includes('event')) {
      const e: Event = JSON.parse(c);
      logger.debug('new message', e.type);
      if (e.type === 'event-data') {
        redisClient.hset('event', e.payload.id, c);
      } else if (e.type === 'event-update') {
        logger.info('New Update');
        redisClient.hset('event', e.payload.id, c);
        pubsub.publish(Constants.UPDATE_EVENT, { eventUpdate: e });
      }
    } else {
      logger.debug(`Received Data: ${c}`);
    }
  });

  ws.on('close', function close(code, reason) {
    logger.info('EXTERNAL WS CONNECTION CLOSED %s %s', code, reason);
    // 30 seconds interval
    setInterval(initExternalWS, 32 * 1000);
  });
};
