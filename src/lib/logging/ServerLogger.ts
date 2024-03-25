import { PRIVATE_PINO_LOG_LEVEL } from '$env/static/private';
import { saveLogMessage } from '$lib/server/database/queries/logging/logServerError';
import type { TNewLogMessage } from '$lib/server/database/schema/logging';
import pino, { type Logger, type LoggerOptions } from 'pino';
import { type TLogEntry, type TLogLevel } from './LogTypes';

export type TServerError = {
	details: unknown;
	message: string;
	level: string;
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

class ServerLogger {
	logger: Logger<never>;

	constructor(opts: LoggerOptions<never>) {
		this.logger = pino(opts);
	}

	private async logToDb({ details, message, context, src, loggedByUser, level }: TNewLogMessage) {
		saveLogMessage({
			details,
			message,
			context,
			src,
			loggedByUser,
			level
		});
	}

	private async log({
		details,
		message,
		context,
		src,
		loggedByUser,
		level
	}: TLogEntry & { level: TLogLevel }) {
		const detailsContent = details as object;
		this.logger[level]({ ...detailsContent, context, src, loggedByUser }, message!);
		this.logToDb({
			details,
			context,
			src,
			loggedByUser,
			level
		});
	}

	async trace({ details, message, context, src, loggedByUser }: TLogEntry) {
		await this.log({ details, message, context, src, loggedByUser, level: 'trace' });
	}

	async debug({ details, message, context, src, loggedByUser }: TLogEntry) {
		await this.log({ details, message, context, src, loggedByUser, level: 'debug' });
	}

	async info({ details, message, context, src, loggedByUser }: TLogEntry) {
		await this.log({ details, message, context, src, loggedByUser, level: 'info' });
	}

	async error({ details, message, context, src, loggedByUser }: TLogEntry) {
		await this.log({ details, message, context, src, loggedByUser, level: 'error' });
	}
}

const logger = new ServerLogger(opts);
const pinoLogger = pino(opts);

export { pinoLogger };

export default logger;
