import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

/** @type {import('rollup').RollupOptions} */
export default {
	input: ['src/index.ts'],
	output: [
		{
			dir: 'dist',
			format: 'es',
			exports: 'named',
			sourcemap: true,
		},
	],
	plugins: [
		external(),
		nodeResolve({
			browser: true,
		}),
		commonjs(),
		typescript({
			exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/*.readme.md'],
		}),
		postcss({
			plugins: [autoprefixer(), cssnano()],
		}),
		terser(),
		filesize(),
	],
};
