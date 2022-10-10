import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
	/**
	 * Renders text.
	 */
	children: string;

	/**
	 * Action state style
	 */
	state: 'default' | 'success' | 'information' | 'warning' | 'error';
}
