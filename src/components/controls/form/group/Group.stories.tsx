import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Group } from './Group';

export default {
	title: 'Form/Group',
	component: Group,
} as ComponentMeta<typeof Group>;

const Template: ComponentStory<typeof Group> = args => <Group {...args} />;

export const Text = Template.bind({});
Text.args = {
	type: 'text',
	text: 'form text',
	required: true,
};
