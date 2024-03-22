import type { Config } from 'drizzle-kit';

export default {
	out: './drizzle',
	schema: './src/lib/server/database/schema/*.ts',
	driver: 'libsql',
	dbCredentials: {
		url: process.env.prod ? (process.env.TURSO_DB_URL as string) : 'file:local.db'
	}
} satisfies Config;
