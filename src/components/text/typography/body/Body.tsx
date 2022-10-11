import { forwardRef } from 'react';

import { Props } from './Body.interface';
import styles from './Body.module.scss';

/**
 * Typography Body Component
 *
 * Text is the used to render text and paragraphs,
 * within an interface.
 *
 * @see Docs https://anthane-git.github.io/core/elements/typography/body
 */
export const Body = forwardRef<HTMLParagraphElement, Props>(
	({ children, ...props }, ref) => (
		<p className={`${styles.body}`} ref={ref} {...props}>
			{children}
		</p>
	)
);

Body.displayName = 'Body';
