import logger from '$lib/logging/ServerLogger';
import type { LayoutServerLoad } from './(layout)/$types';

export const load = (async ({ locals }) => {
	try {
		const { user, session } = locals;

		return {
			user,
			session
		};
	} catch (err) {
		logger.error('poop in the engine block', 'load failed');
	}
}) satisfies LayoutServerLoad;
