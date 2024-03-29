import { forwardRef, useState } from 'react';

import { Input } from '../input';
import { Label } from '../label';
import { Text } from '../text';

import { Props } from './Group.interface';
import styles from './Group.module.scss';

/**
 * Form Group Component
 *
 * Input component is a component that is used to get user input in a text field.
 *
 * @see Docs https://anthane-git.github.io/core/elements/form/control
 * @see WAI-ARIA https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/input_role
 */
export const Group = forwardRef<HTMLInputElement, Props>(
	(
		{
			id = Date.now().toString(),
			label = 'Input Label',
			type = 'text',
			className,
			required,
			state,
			fluid,
			text,
			...props
		},
		ref
	) => {
		const [show, setShow] = useState(false);
		const handleClick = () => setShow(!show);

		return type === 'password' ? (
			<div className={className}>
				{label && <Label htmlFor="text_id" label={label} required={required} />}
				<div className={styles.group}>
					<Input
						type={show ? 'text' : 'password'}
						required={required}
						state={state}
						fluid={fluid}
						ref={ref}
						id={id}
						{...props}
					/>
					<div className={styles.addon}>
						<button onClick={handleClick}> {show ? 'Hide' : 'Show'}</button>
					</div>
				</div>
				{text && <Text state={state}>{text}</Text>}
			</div>
		) : (
			<div className={className}>
				{label && <Label htmlFor={id} label={label} required={required} />}
				<div className={styles.group}>
					<Input
						required={required}
						state={state}
						fluid={fluid}
						type={type}
						ref={ref}
						id={id}
						{...props}
					/>
				</div>
				{text && <Text state={state}>{text}</Text>}
			</div>
		);
	}
);

Group.displayName = 'Group';
