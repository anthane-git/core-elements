import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'Controls/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
	label: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
	label: 'Button',
};

export const Icon = Template.bind({});
Icon.args = {
	label: 'Button',
};

export const Text = Template.bind({});
Text.args = {
	label: 'Button',
};
