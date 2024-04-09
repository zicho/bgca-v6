import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
	const profileIsYours = params.username === locals.user?.username;

	return {
		profileIsYours
	};
}) satisfies PageServerLoad;
