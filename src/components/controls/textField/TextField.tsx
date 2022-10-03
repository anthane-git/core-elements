import { useState } from 'react';
import { Props } from './TextField.interface';
import styles from './TextField.module.scss';

export const TextField = ({
	label,
	id,
	type,
	placeholder,
	className,
	children,
	...props
}: Props) => {
	const [isHidden, setIsHidden] = useState<boolean>(false);
	return (
		<input
			id={id}
			type={isHidden ? 'password' : 'text'}
			className={`${styles.textField} ${className}`}
			placeholder={placeholder}
			{...props}
		>
			{children}
		</input>
	);
};
