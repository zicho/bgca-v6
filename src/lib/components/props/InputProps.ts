import type { InputConstraint } from 'sveltekit-superforms';

export type InputProps = {
	id: string;
	label: string;
	value: string;
	posted?: boolean;
	required?: boolean;
	placeholder?: string;
	errors?: string[] | undefined;
	type: 'text' | 'password';
	classes?: string;
	constraints?: InputConstraint;
};
