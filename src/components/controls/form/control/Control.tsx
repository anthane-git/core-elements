import { Props } from './Control.interface';

export const Control = ({ type, ...props }: Props) => (
	<input type={type || 'text'} {...props}></input>
);
