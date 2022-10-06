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
	variant: 'primary',
	active: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: 'Button',
	type: 'outlined',
	variant: 'primary',
	active: true,
};

const Ico = () => (
	<svg width="20px" height="20px">
		<rect width="100%" height="100%" style={{ fill: 'blue' }} />
	</svg>
);

export const Icon = Template.bind({});
Icon.args = {
	children: 'Button',
	variant: 'primary',
	icon: <Ico />,
	active: true,
};

export const Text = Template.bind({});
Text.args = {
	children: 'Button',
	type: 'text',
	variant: 'primary',
	active: true,
};
