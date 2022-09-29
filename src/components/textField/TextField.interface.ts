import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Input type
	 */
	type: 'text' | 'email' | 'password' | 'textarea';

	/**
	 * Input name
	 */
	id: string;

	/**
	 * Placeholder text
	 */
	placeholder?: string;
	/**
	 * Button contents
	 */
	label?: string;
}
