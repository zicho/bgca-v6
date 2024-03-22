import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {

    const { user, session } = locals;

    return {
        user,
        session
    };
}) satisfies LayoutServerLoad;