import type { TButton } from "./Button.type";

export type TLinkButton = Omit<TButton, 'type' | 'style'> & {
    href: string;
    forceReloadOnClicked?: boolean;
    external?: boolean;
};