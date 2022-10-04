import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Inner text
	 */
	text?: string;
}
