import { Props } from './Button.props';
import styles from './Button.module.scss';

/**
 * button with variant combinations
 */
export const Button = ({
	type,
	variant = 'primary',
	label,
	...props
}: Props) => {
	return (
		<button
			type="button"
			className={`${styles.button} ${styles[type]} ${styles[variant]}`}
			{...props}
		>
			{label}
		</button>
	);
};
