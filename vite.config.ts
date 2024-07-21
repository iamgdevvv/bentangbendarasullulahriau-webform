import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [
		react(),
		legacy({
			targets: ['last 10 years', 'not dead'],
			renderLegacyChunks: false,
		}),
		viteCompression({
			algorithm: 'brotliCompress',
		}),
	],
	css: {
		devSourcemap: true,
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendors: ['dayjs', 'react-icons', 'zod'],
					mantines: [
						'@mantine/core',
						'@mantine/form',
						'@mantine/hooks',
					],
				},
			},
		},
		cssMinify: true,
		minify: true,
		target: 'es2015',
	},
});
