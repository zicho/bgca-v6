import logger from '$lib/logging/ServerLogger';
import { lucia } from '$lib/server/auth';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	logger.info(`received request from adress: ${event.getClientAddress()}`);

	const sessionId = event.cookies.get(lucia.sessionCookieName);

	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;

		if (event.route.id?.includes('(protected)')) {
			redirect(302, '/login');
		} else {
			return resolve(event);
		}
	}

	const { session, user } = await lucia.validateSession(sessionId!);

	if (session && session.fresh) {
		const sessionCookie = lucia.createSessionCookie(session.id);
		// sveltekit types deviates from the de-facto standard
		// you can use 'as any' too
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}

	if (!session) {
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}

	event.locals.user = user;
	event.locals.session = session;

	logger.info(`received request to ${event.url}`, event.locals.user);

	if (event.route.id?.includes('(non_authed)')) {
		redirect(302, '/dashboard');
	}

	return resolve(event);
};

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error, event, status, message }) {
	logger.error('Error was caught in server hooks', {
		error,
		event,
		status,
		message
	});

	return {
		message
	};
}
