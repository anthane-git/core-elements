import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
	/**
	 * Inner text
	 */
	text?: string;
}
