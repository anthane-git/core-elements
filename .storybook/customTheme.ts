import { create } from '@storybook/theming';

export default create({
	base: 'light',

	colorPrimary: 'hotpink',
	colorSecondary: 'deepskyblue',

	// UI
	appBg: '#F9F9F9',
	appContentBg: '#F9F9F9',
	appBorderColor: 'white',
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: 'black',
	textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	barTextColor: 'white',
	barSelectedColor: 'white',
	barBg: '#16213E',

	// Form colors
	inputBg: 'white',
	inputBorder: 'silver',
	inputTextColor: 'black',
	inputBorderRadius: 4,

	brandTitle: 'Anthane Core Elements',
	brandUrl: '#',
	brandImage:
		'https://github.com/anthane-git/core-assets/blob/main/logotype/v1.0.png?raw=true',
	brandTarget: '_self',
});
