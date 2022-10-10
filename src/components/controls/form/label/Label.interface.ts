import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLLabelElement> {
	/**
	 * Renders an accessible label associated with controls.
	 */
	label: string;

	/**
	 * The id of the element the label is associated with.
	 */
	htmlFor: string;

	/**
	 * Specify whether this field is required
	 *
	 * @default false
	 */
	required?: boolean;
}
