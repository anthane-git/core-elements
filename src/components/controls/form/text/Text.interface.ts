import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
	/**
	 * Renders text.
	 */
	children: string;

	/**
	 * Action state style
	 *
	 * @default 'information'
	 */
	state?: 'success' | 'information' | 'warning' | 'error';
}
