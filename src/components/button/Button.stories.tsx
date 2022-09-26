import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'Atoms/Button',
	component: Button,
	parameters: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Button',
	primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
	label: 'Button',
	size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
	label: 'Button',
	size: 'large',
};
