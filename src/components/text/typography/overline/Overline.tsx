import { Props } from './Overline.interface';
import styles from './Overline.module.scss';

export const Overline = ({ children, ...props }: Props) => (
	<span className={`${styles.overline}`} {...props}>
		{children}
	</span>
);
