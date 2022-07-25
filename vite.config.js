import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin(),
		createSvgIconsPlugin({
			// Specify the icon folder to be cached
			iconDirs: [path.resolve(process.cwd(), 'src/icons')],
			// Specify symbolId format
			symbolId: 'icon-[dir]-[name]',

			customDomId: '__svg__icons__dom__',
		}),
	],
	server: {
		host: true,
	},
});
