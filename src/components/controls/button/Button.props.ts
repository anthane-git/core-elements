import { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/**
	 * Form of the button appearance
	 */
	type: 'contained' | 'outlined' | 'text';

	/**
	 * Action style variants
	 */
	variant?: 'primary' | 'secondary' | 'destructive';

	/**
	 * Button label text
	 */
	children?: string;

	/**
	 * Providing a React component will render as an icon
	 */
	icon?: ReactNode;

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
