import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from './Label';

export default {
	title: 'Form/Label',
	component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Label Text',
	htmlFor: 'form-id',
};
