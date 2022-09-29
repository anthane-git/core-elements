import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { Props } from './TextField.interface';
import styles from './TextField.module.scss';

export const TextField = ({
	label,
	id,
	type,
	placeholder,
	children,
	...props
}: Props) => {
	const [isHidden, setIsHidden] = useState<boolean>(false);
	return (
		<div>
			<Label htmlFor={id}>hi</Label>
			{type === 'password' && (
				<>
					<input
						id={id}
						type={isHidden ? 'password' : 'text'}
						className={`${styles.textField}`}
						placeholder={placeholder}
						{...props}
					>
						{children}
					</input>
					<input
						type={'checkbox'}
						onChange={() => setIsHidden(prev => !prev)}
					/>
				</>
			)}
		</div>
	);
};
