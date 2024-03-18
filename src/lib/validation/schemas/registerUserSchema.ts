import { z } from 'zod';

export const registerUserSchema = z
	.object({
		username: z
			.string()
			.regex(/^[a-zA-Z][a-zA-Z0-9_-]{2,}$/, { message: 'Invalid username.' })
			.trim()
			.min(3, { message: 'Must be 3 or more characters long' }),
		password: z.string().trim().min(8, { message: 'Must be 8 or more characters long' }),
		confirm_password: z.string().trim().min(8, { message: 'Must be 8 or more characters long' })
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Passwords don't match",
		path: ['confirm_password']
	});
