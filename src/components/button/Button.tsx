import { ButtonProps } from './Button.interface';
import styles from './Button.module.scss';

export const Button = ({
	primary = false,
	size = 'medium',
	label,
	...props
}: ButtonProps) => {
	const mode = primary ? styles.primary : styles.secondary;
	return (
		<button
			type="button"
			className={`${styles.button} ${styles[size]} ${mode}`}
			{...props}
		>
			{label}
		</button>
	);
};
