import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'Controls/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
	children: 'Contained Button',
	type: 'contained',
	variant: 'primary',
	active: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: 'Outlined Button',
	type: 'outlined',
	variant: 'primary',
	active: true,
};

export const Icon = Template.bind({});
Icon.args = {
	children: 'Icon Button',
	variant: 'primary',
	active: true,
	icon: (
		<svg width="20px" height="20px">
			<rect width="100%" height="100%" />
		</svg>
	),
};

export const Text = Template.bind({});
Text.args = {
	children: 'Text Button',
	type: 'text',
	variant: 'primary',
	active: true,
};
