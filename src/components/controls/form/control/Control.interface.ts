import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLInputElement> {
	/**
	 * Scale to render text
	 */
	type?: 'text';
}
