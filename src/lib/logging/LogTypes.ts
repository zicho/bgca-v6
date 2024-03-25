import type { TNewLogMessage } from '$lib/server/database/schema/logging';

export const LogLevels = {
	Trace: 'trace',
	Debug: 'debug',
	Info: 'info',
	Warn: 'warn',
	Error: 'error',
	Fatal: 'fatal'
} as const;

export type TLogLevel = (typeof LogLevels)[keyof typeof LogLevels];
export type TLogContext = 'client' | 'server';

export type TLogEntry = Omit<TNewLogMessage, 'level' | 'details'> & { details: object };
