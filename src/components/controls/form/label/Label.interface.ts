import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLLabelElement> {
	/**
	 * Inner text
	 */
	label?: string;
}
