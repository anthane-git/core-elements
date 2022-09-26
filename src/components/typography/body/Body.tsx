import { Props } from './Body.interface';
import styles from './Body.module.scss';

export const Body = ({ children, ...props }: Props) => (
	<p className={`${styles.body}}`} {...props}>
		{children}
	</p>
);
