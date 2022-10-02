import { create } from '@storybook/theming';

export default create({
	base: 'dark',

	colorPrimary: '#7938B2',
	colorSecondary: '#7938B2',

	// UI
	appBg: '#1B141D',
	appContentBg: '#34343A',
	appBorderColor: '#28282C',
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: '#A09FA6',
	textInverseColor: 'black',

	// Toolbar default and active colors
	barTextColor: '#BF7AF0',
	barSelectedColor: '#BF7AF0',
	barBg: '#28282C',

	// Form colors
	inputBg: '#3E3E44',
	inputBorder: '#432155',
	inputTextColor: '#F8F1FD',
	inputBorderRadius: 4,

	brandTitle: 'Anthane Core Elements',
	brandUrl: '/',
	brandImage:
		'https://github.com/anthane-git/core-assets/blob/main/logos/core/logotype-dark.png?raw=true',
	brandTarget: '_self',
});
