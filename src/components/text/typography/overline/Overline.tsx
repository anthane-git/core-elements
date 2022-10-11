import { forwardRef } from 'react';

import { Props } from './Overline.interface';
import styles from './Overline.module.scss';

/**
 * Typography Overline Component
 *
 * Text is the used to render text and paragraphs,
 * within an interface.
 *
 * @see Docs https://anthane-git.github.io/core/elements/typography/overline
 */
export const Overline = forwardRef<HTMLSpanElement, Props>(
	({ children, ...props }, ref) => (
		<span className={`${styles.overline}`} ref={ref} {...props}>
			{children}
		</span>
	)
);

Overline.displayName = 'Overline';
