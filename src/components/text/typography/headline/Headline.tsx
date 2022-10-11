import { forwardRef } from 'react';

import { Props } from './Headline.interface';
import styles from './Headline.module.scss';

/**
 * Typography Headline Component
 *
 * Text is the used to render text and paragraphs,
 * within an interface.
 *
 * @see Docs https://anthane-git.github.io/core/elements/typography/headline
 */
export const Headline = forwardRef<HTMLHeadingElement, Props>(
	({ size, children, ...props }, ref) => (
		<h1 className={`${styles.headline} ${styles[size]}`} ref={ref} {...props}>
			{children}
		</h1>
	)
);

Headline.displayName = 'Headline';
