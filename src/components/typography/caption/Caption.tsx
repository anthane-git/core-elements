import { Props } from './Caption.interface';
import styles from './Caption.module.scss';

export const Caption = ({ children, ...props }: Props) => (
	<p className={`${styles.caption}}`} {...props}>
		{children}
	</p>
);
