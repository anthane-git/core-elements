import { forwardRef } from 'react';

import { Props } from './Text.interface';
import styles from './Text.module.scss';

/**
 * Form Text
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided.
 */
export const Text = forwardRef<HTMLInputElement, Props>(
	({ children, state = 'information', ...props }: Props) => (
		<p className={`${styles.text} ${styles[state]}`} {...props}>
			{children}
		</p>
	)
);

Text.displayName = 'Text';
