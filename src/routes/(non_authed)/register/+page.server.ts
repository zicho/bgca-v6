import { UsernameTaken } from '$lib/data/strings/ValidationMessages';
import { lucia } from '$lib/server/auth';
import { getUser } from '$lib/server/database/queries/getUser';
import { registerUser } from '$lib/server/database/queries/registerUser';
import { registerUserSchema } from '$lib/validation/schemas/registerUserSchema';
import { fail, redirect } from '@sveltejs/kit';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const form = await superValidate(zod(registerUserSchema));
	return { form };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(registerUserSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const existingUser = await getUser({ username: form.data.username });

		if (existingUser.success && existingUser.result != null) {
			return message(form, UsernameTaken, {
				status: 403
			});
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
