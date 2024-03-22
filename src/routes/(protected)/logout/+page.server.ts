import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { lucia } from '$lib/server/auth';

export const load = (async () => {
    redirect(301, "/")
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ locals, cookies }) => {
        if (!locals.session) {
            redirect(302, "/login");
        };

        await lucia.invalidateSession(locals.session.id);
        const sessionCookie = lucia.createBlankSessionCookie();
        
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
    
        redirect(302, "/login");
    }
};