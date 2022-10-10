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
export const Group = forwardRef<HTMLDivElement, Props>(
	(
		{
			id,
			type = 'text',
			label = 'Input Label',
			required,
			state,
			text,
			...props
		},
		ref
	) => {
		const [show, setShow] = useState(false);
		const handleClick = () => setShow(!show);

		return type === 'password' ? (
			<div ref={ref}>
				{label && <Label htmlFor="text-id" label={label} required={required} />}
				<div className={styles.group}>
					<Input
						id={id}
						type={show ? 'text' : 'password'}
						required={required}
						state={state}
						{...props}
					/>
					<div className={styles.addon}>
						<button onClick={handleClick}> {show ? 'Hide' : 'Show'}</button>
					</div>
				</div>
				{text && <Text state={state}>{text}</Text>}
			</div>
		) : (
			<div>
				{label && (
					<Label htmlFor={id || 'text_id'} label={label} required={required} />
				)}
				<div className={styles.group}>
					<Input
						id={'text_id'}
						type={type}
						required={required}
						state={state}
						{...props}
					/>
				</div>
				{text && <Text state={state}>{text}</Text>}
			</div>
		);
	}
);

Group.displayName = 'Group';
