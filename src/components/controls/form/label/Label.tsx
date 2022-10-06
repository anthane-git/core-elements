import * as Element from '@radix-ui/react-label';

import { Props } from './Label.interface';
import styles from './Label.module.scss';

export const Label = ({ label, ...props }: Props) => (
	<Element.Root className={styles.label} {...props}>
		{label}
	</Element.Root>
);
