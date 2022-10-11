import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Headline } from './Headline';

export default {
	title: 'Text/Typography',
	component: Headline,
} as ComponentMeta<typeof Headline>;

const Story: ComponentStory<typeof Headline> = args => <Headline {...args} />;

export const ComponentHeadline = Story.bind({});
ComponentHeadline.storyName = 'Headline';
ComponentHeadline.args = {
	children: 'The quick brown fox jumps over the lazy dog',
	size: 'Medium',
};
