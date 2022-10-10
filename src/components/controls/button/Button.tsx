import { forwardRef } from 'react';

import { Props } from './Button.props';
import styles from './Button.module.scss';

/**
 * Button Component
 *
 * Button component is used to trigger an action or event,
 * such as submitting a form, opening a Dialog, canceling an action,
 * or performing a delete operation.
 *
 * @see Docs https://anthane-git.github.io/core/elements/controls/button
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button
 */
export const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			variant = 'primary',
			as = 'button',
			children,
			active,
			type,
			icon,
			...props
		},
		ref
	) => (
		<button
			ref={ref}
			type={as}
			className={`${styles.button} ${styles[type]} ${styles[variant]} ${
				!active && styles.disabled
			} ${icon && styles.icon}`}
			{...props}
		>
			{icon ? <figure>{icon}</figure> : children}
		</button>
	)
);

Button.displayName = 'Button';
