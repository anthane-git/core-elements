import { Props } from './Button.interface';
import styles from './Button.module.scss';

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
