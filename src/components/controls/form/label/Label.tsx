import { Props } from './Label.interface';

export const Label = ({ label, ...props }: Props) => (
	<label {...props}>{label}</label>
);
