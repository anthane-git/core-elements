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
		{
			state = 'information',
			required = false,
			disable = false,
			type = 'text',
			fluid = false,
			id,
			...props
		},
		ref
	) => (
		<input
			className={`${styles.input} ${styles[type]} ${styles[state]} ${
				fluid && styles.fluid
			} ${disable && styles.disable}`}
			id={id}
			required={required}
			type={type}
			ref={ref}
			{...props}
		/>
	)
);

Input.displayName = 'Input';
