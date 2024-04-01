import { saveLogMessage } from '$lib/server/database/queries/logging/logServerError';
import type { TNewLogMessage } from '$lib/server/database/schema/logging';
import { type TLogContext, type TLogEntry, type TLogLevel } from './LogTypes';
import pinoLogger from './PinoLogger';

export type TServerError = {
	details: unknown;
	message: string;
	level: string;
};

class ServerLogger {
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
		pinoLogger[level]({ ...detailsContent, context, src, loggedByUser }, message!);
		this.logToDb({
			details: JSON.stringify(detailsContent),
			message,
			context,
			src,
			loggedByUser,
			level
		});
	}

	async trace(
		message: string,
		details?: unknown,
		context?: TLogContext,
		src?: string,
		loggedByUser?: string
	) {
		await this.log({ details, message, context, src, loggedByUser, level: 'trace' });
	}

	async debug(
		message: string,
		details?: unknown,
		context?: TLogContext,
		src?: string,
		loggedByUser?: string
	) {
		await this.log({ details, message, context, src, loggedByUser, level: 'debug' });
	}

	async info(
		message: string,
		details?: unknown,
		context?: TLogContext,
		src?: string,
		loggedByUser?: string
	) {
		await this.log({ details, message, context, src, loggedByUser, level: 'info' });
	}

	async error(
		message: string,
		details?: unknown,
		context?: TLogContext,
		src?: string,
		loggedByUser?: string
	) {
		await this.log({ details, message, context, src, loggedByUser, level: 'error' });
	}
}

const logger = new ServerLogger();
export default logger;
