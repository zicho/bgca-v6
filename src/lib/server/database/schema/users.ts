import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export type TUser = typeof userTable.$inferSelect;
export type TNewUser = typeof userTable.$inferInsert;

export const userTable = sqliteTable('user', {
	id: text('id').notNull().primaryKey(),
	username: text('username').notNull(),
	pw_hash: text('pw_hash').notNull()
});

export const sessionTable = sqliteTable('session', {
	id: text('id').notNull().primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id),
	expiresAt: integer('expires_at').notNull()
});
