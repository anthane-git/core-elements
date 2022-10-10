import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLInputElement> {
	/**
	 * Form of the button appearance
	 *
	 * @default 'text'
	 */
	type: 'text' | 'password' | 'email';

	/**
	 * ID key
	 */
	id?: string;

	/**
	 * Specify whether this field is required
	 *
	 * @default false
	 */
	required?: boolean;

	/**
	 * Renders an accessible label associated with controls.
	 */
	label?: string;

	/**
	 * Disables the input, preventing mouse events
	 */
	active?: boolean;

	/**
	 * Action state style
	 */
	state?: 'error' | 'warning' | 'success' | 'information';
}
