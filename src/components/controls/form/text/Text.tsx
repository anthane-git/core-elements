import { Props } from './Text.interface';
import styles from './Text.module.scss';

export const Text = ({ text, ...props }: Props) => (
	<p className={styles.text} {...props}>
		{text}
	</p>
);
