import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Display } from './Display';

export default {
	title: 'Text/Typography',
	component: Display,
} as ComponentMeta<typeof Display>;

const Story: ComponentStory<typeof Display> = args => <Display {...args} />;

export const ComponentDisplay = Story.bind({});
ComponentDisplay.storyName = 'Display';
ComponentDisplay.args = {
	children: 'The quick brown fox jumps over the lazy dog',
	size: 'Medium',
};
