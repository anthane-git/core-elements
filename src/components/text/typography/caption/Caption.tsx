import { forwardRef } from 'react';

import { Props } from './Caption.interface';
import styles from './Caption.module.scss';

/**
 * Typography Caption Component
 *
 * Text is the used to render text and paragraphs,
 * within an interface.
 *
 * @see Docs https://anthane-git.github.io/core/elements/typography/caption
 */

export const Caption = forwardRef<HTMLParagraphElement, Props>(
	({ children, ...props }, ref) => (
		<p className={`${styles.caption}`} ref={ref} {...props}>
			{children}
		</p>
	)
);

Caption.displayName = 'Caption';
