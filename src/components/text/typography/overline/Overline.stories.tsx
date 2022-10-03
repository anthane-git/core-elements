import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Overline } from './Overline';

export default {
	title: 'Text/Typography',
	component: Overline,
} as ComponentMeta<typeof Overline>;

const Story: ComponentStory<typeof Overline> = args => <Overline {...args} />;

export const ComponentOverline = Story.bind({});
ComponentOverline.storyName = 'Overline';
ComponentOverline.args = {
	children: 'The quick brown fox jumps over the lazy dog',
};
