import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
	/**
	 * Scale to render text
	 */
	size: 'XXLarge' | 'XLarge' | 'Large' | 'Medium' | 'Small' | 'XSmall';
}
