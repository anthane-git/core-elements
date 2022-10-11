import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
	/**
	 * Scale to render text
	 *
	 * @default 'Medium'
	 */
	size: 'XXLarge' | 'XLarge' | 'Large' | 'Medium' | 'Small' | 'XSmall';
}
