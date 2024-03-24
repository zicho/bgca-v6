import type { ButtonProps } from './ButtonProps';

export type LinkButtonProps = Omit<ButtonProps, 'type' | 'style'> & {
	href: string;
	forceReloadOnClicked?: boolean;
	external?: boolean;
};
