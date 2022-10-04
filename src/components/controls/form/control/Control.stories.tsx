import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Control } from './Control';

export default {
	title: 'Form/Control',
	component: Control,
} as ComponentMeta<typeof Control>;

const Template: ComponentStory<typeof Control> = args => <Control {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
