import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	redirect(302, `/profile/${locals.user?.username}`);
}) satisfies PageServerLoad;
