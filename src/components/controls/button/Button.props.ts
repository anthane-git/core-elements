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
	 * Button label
	 */
	children?: string;

	/**
	 * Disables the Button, preventing mouse events,
	 * even if the underlying component is an `<a>` element
	 * Manually set the visual state of the button to active
	 */
	active?: boolean;

	/**
	 * Disables the Button, preventing mouse events,
	 * even if the underlying component is an `<a>` element
	 */
	disabled?: boolean;

	/**
	 * Providing a `href` will render an `<a>` element
	 */
	href?: string;
}
