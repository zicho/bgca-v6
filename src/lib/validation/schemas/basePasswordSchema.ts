import { MaxCharactersF, MinCharactersF, PwNoSpaces } from '$lib/data/strings/ValidationMessages';
import formatString from '$lib/utils/formatString';
import { z } from 'zod';
import validationRules from '../config/ValidationRules';

export const basePasswordSchema = z
	.string()
	.regex(/^[^\s]*$/, { message: PwNoSpaces })
	.min(validationRules.minPasswordLength, {
		message: formatString(MinCharactersF, validationRules.minPasswordLength)
	})
	.max(validationRules.maxPasswordLength, {
		message: formatString(MaxCharactersF, validationRules.maxPasswordLength)
	})
	.trim();
