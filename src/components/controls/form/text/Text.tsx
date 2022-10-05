import { Props } from './Text.interface';

export const Text = ({ text, ...props }: Props) => <p {...props}>{text}</p>;
