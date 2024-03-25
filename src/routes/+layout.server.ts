import logger from '$lib/logging/ServerLogger';
import type { LayoutServerLoad } from './(layout)/$types';

export const load = (async ({ locals }) => {
	try {
		const { user, session } = locals;

		throw new Error();

		return {
			user,
			session
		};
	} catch (err) {
		logger.error({ details: 'poop in the engine block', message: 'load failed' });
	}
}) satisfies LayoutServerLoad;
