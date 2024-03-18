import { z } from 'zod';

export const loginUserSchema = z.object({
	username: z.string().trim().min(1, { message: 'Username missing' }),
	password: z.string().trim().min(1, { message: 'Password missing' })
});
