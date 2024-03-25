import { pinoLogger } from '$lib/logging/ServerLogger';
import { failedOperation, successfulOperation, type TDbOperation } from '../../TDbOperation';
import { db } from '../../db';
import { logs, type TNewLogMessage } from '../../schema/logging';

export async function saveLogMessage(
	logMsg: TNewLogMessage
): Promise<TDbOperation<TNewLogMessage>> {
	try {
		await db.insert(logs).values(logMsg);

		return successfulOperation({ data: logMsg });
	} catch (err) {
		pinoLogger.error(err, 'Failed to log error to DB');
		return failedOperation({ message: 'Failed to log error to DB' });
	}
}
