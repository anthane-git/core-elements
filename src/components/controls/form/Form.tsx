import { Props } from './Form.props';
import { Control } from './control';
import { Label } from './label';
import { Text } from './text';

export const Form = ({ children }: Props) => <form>{children}</form>;

export default Object.assign(Form, {
	Control,
	Label,
	Text,
});
