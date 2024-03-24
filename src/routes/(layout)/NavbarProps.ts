import type { User } from 'lucia';
import type { SvelteComponent } from 'svelte';

export type NavbarProps = {
	user?: User | null | undefined;
};

export type NavbarLinkProps = {
	url: string;
	displayText?: string;
	id: string;
	aria: string;
	icon?: typeof SvelteComponent<any, SVGAElement>;
	authOnly: boolean;
	classes?: string;
};
