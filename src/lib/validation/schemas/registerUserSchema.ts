import {
	InvalidUsername,
	MaxCharactersF,
	MinCharactersF,
	PwNoSpaces
} from '$lib/data/strings/ValidationMessages';
import formatString from '$lib/utils/formatString';
import { z } from 'zod';
import validationRules from '../config/ValidationRules';

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
		password: z
			.string()
			.regex(/^[^\s]*$/, { message: PwNoSpaces })
			.min(validationRules.minUsernameLength, {
				message: formatString(MinCharactersF, validationRules.minPasswordLength)
			})
			.max(validationRules.maxUsernameLength, {
				message: formatString(MaxCharactersF, validationRules.maxPasswordLength)
			})
			.trim(),
		confirm_password: z.string() // no need to validate since it has to be identical to password (which is validated)
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Passwords don't match",
		path: ['confirm_password']
	});
