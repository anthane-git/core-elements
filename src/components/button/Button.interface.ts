import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/**
	 * Button form type
	 */
	type: 'contained' | 'outlined' | 'icon' | 'text';
	/**
	 * Button style variant
	 */
	variant?: 'primary' | 'secondary';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * onClick handler
	 */
	onClick?: () => void;
}
