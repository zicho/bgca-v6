import { drizzle } from 'drizzle-orm/libsql';
import { dev } from '$app/environment';
import { createClient } from '@libsql/client';
import { PRIVATE_TURSO_DB_AUTH_TOKEN, PRIVATE_TURSO_DB_URL } from '$env/static/private';
import * as schema from "$lib/server/database/schema/_index";

const url = dev ? 'file:local.db' : PRIVATE_TURSO_DB_URL;

if (!url) {
	throw new Error('TURSO_DB_URL is not set');
}
if (!dev && !PRIVATE_TURSO_DB_AUTH_TOKEN) {
	throw new Error('TURSO_DB_AUTH_TOKEN is not set');
}

const libsql = createClient({ url, authToken: PRIVATE_TURSO_DB_AUTH_TOKEN });
export const db = drizzle(libsql, { schema });