import { Props } from './Control.interface';
import styles from './Control.module.scss';

export const Control = ({ type, ...props }: Props) => (
	<input type={type || 'text'} className={styles.control} {...props}></input>
);
