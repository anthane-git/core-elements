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
	 * For a full width input,
	 * spanning the entire width of parent.
	 *
	 * @default false
	 */
	fluid?: boolean;

	/**
	 * Disables the input, preventing mouse events
	 *
	 * @default false
	 */
	disable?: boolean;

	/**
	 * Action state style
	 */
	state?: 'error' | 'warning' | 'success' | 'information';
}
