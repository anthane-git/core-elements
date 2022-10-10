import { forwardRef } from 'react';

import { Props } from './Input.interface';
import styles from './Input.module.scss';

/**
 * Input Component
 *
 * Input component is a component that is used to get user input in a text field.
 *
 * @see Docs https://anthane-git.github.io/core/elements/form/control
 * @see WAI-ARIA https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/input_role
 */
export const Input = forwardRef<HTMLInputElement, Props>(
	(
		{ id, required = false, type = 'text', state = 'information', ...props },
		ref
	) => (
		<input
			className={`${styles.input} ${styles[state]}`}
			id={id || 'input_id'}
			required={required}
			type={type}
			ref={ref}
			{...props}
		/>
	)
);

Input.displayName = 'Input';
