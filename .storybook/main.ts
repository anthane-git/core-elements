import path from 'path';

export default {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-zeplin/register',
		'storybook-addon-css-user-preferences',
	],
	framework: '@storybook/react',
	webpackFinal: async (config: any) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../src/'),
		});

		return config;
	},
};
