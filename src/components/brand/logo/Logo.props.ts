import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Logo form type
	 */
	type?: 'contained' | 'outlined' | 'icon' | 'text';
}
