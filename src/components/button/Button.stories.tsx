import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'Atoms/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Button',
	primary: true,
};
Primary.parameters = {
	zeplinLink:
		'zpl://components?pid=63314bec5c936a148ce98762&coid=63314c38290bbf15ecde8564',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
};
Secondary.parameters = {
	zeplinLink:
		'zpl://components?pid=63314bec5c936a148ce98762&coid=63314c3807a6451582cab68d',
};

export const Medium = Template.bind({});
Medium.args = {
	label: 'Button',
	size: 'medium',
};
Medium.parameters = {
	zeplinLink:
		'zpl://components?pid=63314bec5c936a148ce98762&coid=63314c3807a6451582cab68d',
};

export const Large = Template.bind({});
Large.args = {
	label: 'Button',
	size: 'large',
};
Large.parameters = {
	zeplinLink:
		'zpl://components?pid=63314bec5c936a148ce98762&coid=63314c38c849561b214b5b16',
};
