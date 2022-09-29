import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/**
	 * Make the button the as the primary call to action
	 */
	primary?: boolean;
	/**
	 * Size of the button
	 */
	size?: 'medium' | 'large';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * onClick handler
	 */
	onClick?: () => void;
}
