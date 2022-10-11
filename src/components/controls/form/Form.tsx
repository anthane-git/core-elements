import { Props } from './Form.props';
import { Group } from './group';
import { Label } from './label';
import { Text } from './text';
import { Input } from './input';

export const Form = ({ children }: Props) => <form>{children}</form>;

export default Object.assign(Form, {
	Group,
	Input,
	Label,
	Text,
});
