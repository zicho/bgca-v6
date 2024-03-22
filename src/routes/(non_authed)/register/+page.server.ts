import { registerUserSchema } from '$lib/validation/schemas/registerUserSchema';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { registerUser } from '$lib/server/database/queries/registerUser';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';
import { lucia } from '$lib/server/auth';
import { getUser } from '$lib/server/database/queries/getUser';

export const load = (async () => {
	const form = await superValidate(zod(registerUserSchema));
	return { form };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(registerUserSchema));

		if (!form.valid) {
			if (form.errors['username']) {
				return message(
					form,
					`
                Usernames must follow these rules:<br />
                    1. Minimum length: 3<br />
                    2. Have at least one letter<br />
                    3. Must begin with a letter<br />
                    4. May contain only letters, numbers, dashes and underscores.<br />
                `,
					{
						status: 403
					}
				);
			}

			return fail(400, { form });
		}

		const existingUser = await getUser({ username: form.data.username });

		if (existingUser.success && existingUser.result != null) {
			return message(
				form,
				'Username is already taken',
				{
					status: 403
				}
			);
		}

		const id = generateId(15);
		const hashedPassword = await new Argon2id().hash(form.data.password);

		const registerUserOperation = await registerUser({
			id,
			username: form.data.username,
			pw_hash: hashedPassword
		});

		if (registerUserOperation.success) {
			const session = await lucia.createSession(id, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});

			redirect(303, '/dashboard');
		} else {
			return message(form, registerUserOperation.message, {
				status: 500
			});
		}
	}
};
