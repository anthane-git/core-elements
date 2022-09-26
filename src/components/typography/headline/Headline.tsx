import { Props } from './Headline.interface';
import styles from './Headline.module.scss';

export const Headline = ({ size, children, ...props }: Props) => (
	<h1 className={`${styles.headline} ${styles[size]}`} {...props}>
		{children}
	</h1>
);
