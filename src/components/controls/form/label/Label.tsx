import { forwardRef } from 'react';
import * as Element from '@radix-ui/react-label';

import { Props } from './Label.interface';
import styles from './Label.module.scss';

/**
 * Form Label
 *
 * The label of a form input,
 * The usage is similar to html label.
 */
export const Label = forwardRef<HTMLInputElement, Props>(
	({ label, required, ...props }: Props) => (
		<Element.Root className={styles.label} {...props}>
			{label}
			{required && <span>*</span>}
		</Element.Root>
	)
);

Label.displayName = 'Label';
