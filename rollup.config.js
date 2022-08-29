import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';

export default [
	{
		input: './src/index.ts',
		output: [
			{
				file: 'dist/index.es.js',
				format: 'es',
				exports: 'named',
			},
		],
		plugins: [
			scss({
				output: false,
				failOnError: true,
				outputStyle: 'compressed',
			}),
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/preset-react'],
			}),
			external(),
			resolve(),
			typescript(),
			terser(),
		],
	},
];
