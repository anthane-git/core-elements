import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Caption } from './Caption';

export default {
	title: 'Atoms/Typography',
	component: Caption,
} as ComponentMeta<typeof Caption>;

const Story: ComponentStory<typeof Caption> = args => <Caption {...args} />;

export const ComponentCaption = Story.bind({});
ComponentCaption.storyName = 'Caption';
ComponentCaption.args = {
	children: 'The quick brown fox jumps over the lazy dog',
};
