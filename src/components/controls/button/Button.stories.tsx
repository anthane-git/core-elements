import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'Controls/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
	children: 'Button',
	type: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: 'Button',
	type: 'outlined',
};

export const Icon = Template.bind({});
Icon.args = {
	children: 'Button',
	type: 'icon',
};

export const Text = Template.bind({});
Text.args = {
	children: 'Button',
	type: 'text',
};
