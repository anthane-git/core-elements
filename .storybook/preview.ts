import { themes } from '@storybook/theming';
import '@anthane/core-fonts/index.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		theme: themes.dark,
	},
};
