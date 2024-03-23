import pino, { type LoggerOptions } from 'pino';

// Assuming PRIVATE_PINO_LOG_LEVEL is coming from somewhere
const PRIVATE_PINO_LOG_LEVEL = process.env.PRIVATE_PINO_LOG_LEVEL;

const opts: LoggerOptions = {
	level: PRIVATE_PINO_LOG_LEVEL || 'info',
	transport: {
		targets: [
			{
				target: 'pino/file',
				options: { destination: 'app.log' }
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
