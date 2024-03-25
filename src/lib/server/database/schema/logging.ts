import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export type TLogMessage = typeof logs.$inferSelect;
export type TNewLogMessage = typeof logs.$inferInsert;

export const logs = sqliteTable('logs', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	details: text('details', { mode: 'json' }).notNull(),
	message: text('message'),
	level: text('level', {
		enum: ['trace', 'debug', 'info', 'warn', 'error', 'fatal']
	}).notNull(),
	src: text('src'),
	context: text('context'),
	loggedByUser: text('loggedByUser')
});
