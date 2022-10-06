import { Props } from './Display.interface';
import styles from './Display.module.scss';

export const Display = ({ size, children, ...props }: Props) => (
	<h1 className={`${styles.display} ${styles[size || 'Medium']}`} {...props}>
		{children}
	</h1>
);
