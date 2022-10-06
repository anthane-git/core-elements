import { Props } from './Button.props';
import styles from './Button.module.scss';

/**
 * button with variant combinations
 *
 * Used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”.
 */
export const Button = ({
	variant = 'primary',
	children,
	active,
	type,
	icon,
	...props
}: Props) => {
	return (
		<button
			type="button"
			className={`${styles.button} ${styles[type]} ${styles[variant]} ${
				!active && styles.disabled
			} ${icon && styles.icon}`}
			{...props}
		>
			{icon ? <figure>{icon}</figure> : children}
		</button>
	);
};
