import { Props } from './Text.interface';
import styles from './Text.module.scss';

export const Text = ({ children, ...props }: Props) => (
	<p className={styles.text} {...props}>
		{children}
	</p>
);
