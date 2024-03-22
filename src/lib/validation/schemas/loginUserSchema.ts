import { MissingUsername, PwMissing } from '$lib/data/strings/ValidationMessages';
import { z } from 'zod';

export const loginUserSchema = z.object({
	username: z.string().trim().min(1, { message: MissingUsername }),
	password: z.string().trim().min(1, { message: PwMissing })
});
