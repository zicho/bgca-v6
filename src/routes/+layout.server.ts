import type { LayoutServerLoad } from './(layout)/$types';

export const load = (async ({ locals }) => {
	const { user, session } = locals;

	return {
		user,
		session
	};
}) satisfies LayoutServerLoad;
