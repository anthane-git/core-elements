import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		zeplinLink:
			'zpl://components?pid=63314bec5c936a148ce98762&cseid=63314c33face09148172f2b8',
	},
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
