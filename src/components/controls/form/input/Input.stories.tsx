import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
	title: 'Form/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
	type: 'text',
	disable: false,
	fluid: false,
};

export const Password = Template.bind({});
Password.args = {
	type: 'password',
	disable: false,
	fluid: false,
};

export const Email = Template.bind({});
Email.args = {
	type: 'email',
	disable: false,
	fluid: false,
};

export const Submit = Template.bind({});
Submit.args = {
	type: 'submit',
	disable: false,
	fluid: false,
};
