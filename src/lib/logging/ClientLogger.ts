import { PRIVATE_PINO_LOG_LEVEL } from '$env/static/private';
import pino, { type LoggerOptions } from 'pino';

export type TClientError = {
	details: unknown;
	message: string;
};

const opts: LoggerOptions = {
	level: PRIVATE_PINO_LOG_LEVEL || 'info',
	transport: {
		targets: [
			{
				target: 'pino/file',
				options: { destination: 'server-errors.log' }
			},
			{
				target: 'pino-pretty'
				// If pino-pretty needs options, they would go here
			}
		]
	}
};

const logger = pino(opts);

export default logger;
