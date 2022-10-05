import { Props } from './Logo.props';
import styles from './Logo.module.scss';

/**
 * Logo with variant combinations
 */
export const Logo = ({ ...props }: Props) => {
	return (
		<div className={`${styles.logo}`} {...props}>
			Logo
		</div>
	);
};
