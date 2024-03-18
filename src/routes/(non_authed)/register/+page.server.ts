import { registerUserSchema } from '$lib/validation/schemas/registerUserSchema';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const form = await superValidate(zod(registerUserSchema));
	return { form };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(registerUserSchema));

		console.dir(form);

		if (!form.valid) {
			if (form.errors['username']) {
				return message(form, 
                `
                Usernames must follow these rules:<br />
                    1. Minimum length: 3<br />
                    2. Have at least one letter<br />
                    3. Must begin with a letter<br />
                    4. May contain only letters, numbers, dashes and underscores.<br />
                `
                , {
					status: 403
				});
			}

            return fail(400, { form });
		}

		redirect(303, '/');
	}
};
