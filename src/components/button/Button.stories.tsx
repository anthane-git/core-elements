import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		zeplinLink:
			'zpl://components?pid=6330fe1e1cd7f0176391d239&coid=63310839321eda1aa4e25e77',
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};
