import { Props } from './Text.interface';
import styles from './Text.module.scss';

/**
 * Form Text
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided.
 */
export const Text = ({ children, ...props }: Props) => (
	<p className={styles.text} {...props}>
		{children}
	</p>
);
