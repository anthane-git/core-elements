import { forwardRef } from 'react';

import { Props } from './Display.interface';
import styles from './Display.module.scss';

/**
 * Typography Display Component
 *
 * Text is the used to render text and paragraphs,
 * within an interface.
 *
 * @see Docs https://anthane-git.github.io/core/elements/typography/display
 */
export const Display = forwardRef<HTMLHeadingElement, Props>(
	({ size = 'Medium', children, ...props }, ref) => (
		<h1 className={`${styles.display} ${styles[size]}`} ref={ref} {...props}>
			{children}
		</h1>
	)
);

Display.displayName = 'Display';
