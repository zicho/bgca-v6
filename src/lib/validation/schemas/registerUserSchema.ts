import {
	AtLeastOneLetter,
	MaxCharactersF,
	MinCharactersF,
	PwNoMatch,
	UsernameFormatRules
} from '$lib/data/strings/ValidationMessages';
import formatString from '$lib/utils/formatString';
import { z } from 'zod';
import validationRules from '../config/ValidationRules';
import { basePasswordSchema } from './basePasswordSchema';

// letters (upper/lower), numbers, dashes and underscores.
const usernameFormatPattern = /^[a-zA-Z0-9-_]+$/;

export const registerUserSchema = z
	.object({
		username: z
			.string()
			.regex(/[a-zA-Z]/, { message: AtLeastOneLetter })
			.regex(usernameFormatPattern, { message: UsernameFormatRules })
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
