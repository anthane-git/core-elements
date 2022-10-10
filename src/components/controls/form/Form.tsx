import { Props } from './Form.props';
import { Label } from './label';
import { Text } from './text';
import { Input } from './input';

export const Form = ({ children }: Props) => <form>{children}</form>;

export default Object.assign(Form, {
	Input,
	Label,
	Text,
});
