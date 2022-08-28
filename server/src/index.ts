import 'module-alias/register';
import server from '@app/api/server';
import { logger } from './api/utils/logger';

void server().catch((err) => logger.fatal({ err }, 'bootstraping error'));
