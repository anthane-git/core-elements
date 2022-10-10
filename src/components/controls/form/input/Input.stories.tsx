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
};

export const Password = Template.bind({});
Password.args = {
	type: 'password',
};

export const Email = Template.bind({});
Email.args = {
	type: 'email',
};
