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
	disable: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: 'Outlined Button',
	type: 'outlined',
	variant: 'primary',
	disable: false,
};

export const Icon = Template.bind({});
Icon.args = {
	children: 'Icon Button',
	variant: 'primary',
	disable: false,
	icon: (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
		</svg>
	),
};

export const Text = Template.bind({});
Text.args = {
	children: 'Text Button',
	type: 'text',
	variant: 'primary',
	disable: false,
};
