import { config } from '@app/config';
import { WebSocket } from 'ws';

export const ws = new WebSocket(
  `wss://sb-ws-mock-api.herokuapp.com?username=${config.auth.username}&password=${config.auth.password}`
);
