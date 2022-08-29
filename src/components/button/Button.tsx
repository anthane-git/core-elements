import { ReactNode } from 'react';
import { ButtonProps } from './Button.interface';
import styles from './Button.module.scss';

export const Button: React.FC<ButtonProps> = ({
	children,
	...props
}: {
	children: ReactNode;
}) => {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	);
};
