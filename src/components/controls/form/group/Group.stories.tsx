import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Group } from './Group';

export default {
	title: 'Form/Group',
	component: Group,
} as ComponentMeta<typeof Group>;

const Template: ComponentStory<typeof Group> = args => <Group {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'text',
	text: '📖 Pleae read the instructions',
	required: true,
	fluid: false,
};

export const Fluid = Template.bind({});
Fluid.args = {
	type: 'text',
	text: '📖 Pleae read the instructions',
	required: true,
	fluid: true,
};
