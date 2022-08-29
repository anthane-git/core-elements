import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import multiInput from 'rollup-plugin-multi-input';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default [
	{
		input: [
			'src/components/**/*.tsx',
			'src/components/**/index.ts',
			'!src/components/**/*.test.tsx',
			'!src/components/**/*.stories.tsx',
		],
		output: [
			{
				dir: 'dist',
				format: 'es',
				exports: 'named',
				sourcemap: true,
			},
		],
		plugins: [
			multiInput({
				relative: 'src/components',
			}),
			external(),
			resolve(),
			commonjs(),
			postcss({
				modules: true,
				plugins: [autoprefixer(), cssnano()],
			}),
			typescript(),
			terser(),
			filesize(),
		],
	},
];
