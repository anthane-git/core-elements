import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Body } from './Body';

export default {
	title: 'Atoms/Typography',
	component: Body,
} as ComponentMeta<typeof Body>;

const Story: ComponentStory<typeof Body> = args => <Body {...args} />;

export const ComponentBody = Story.bind({});
ComponentBody.storyName = 'Body';
ComponentBody.args = {
	children: 'The quick brown fox jumps over the lazy dog',
};
