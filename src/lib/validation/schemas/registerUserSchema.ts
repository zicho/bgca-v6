import {
	InvalidUsername,
	MaxCharactersF,
	MinCharactersF,
	PwNoMatch
} from '$lib/data/strings/ValidationMessages';
import formatString from '$lib/utils/formatString';
import { z } from 'zod';
import validationRules from '../config/ValidationRules';
import { basePasswordSchema } from './basePasswordSchema';

export const registerUserSchema = z
	.object({
		username: z
			.string()
			.regex(/^[a-zA-Z][a-zA-Z0-9_-]{2,}$/, { message: InvalidUsername })
			.min(validationRules.minUsernameLength, {
				message: formatString(MinCharactersF, validationRules.minUsernameLength)
			})
			.max(validationRules.maxUsernameLength, {
				message: formatString(MaxCharactersF, validationRules.maxPasswordLength)
			}),
		password: basePasswordSchema,
		confirm_password: basePasswordSchema
	})
	.refine((data) => data.password === data.confirm_password, {
		message: PwNoMatch,
		path: ['confirm_password']
	});
