import path from 'node:path';
import react from '@vitejs/plugin-react';
import { createLogger, defineConfig } from 'vite';

const isDev = process.env.NODE_ENV !== 'production';

const configHorizonsViteErrorHandler = `/* ... */`;
const configHorizonsRuntimeErrorHandler = `/* ... */`;
const configHorizonsConsoleErrroHandler = `/* ... */`;
const configWindowFetchMonkeyPatch = `/* ... */`;

const addTransformIndexHtml = {
	name: 'add-transform-index-html',
	transformIndexHtml(html) {
		return {
			html,
			tags: [
				{ tag: 'script', attrs: { type: 'module' }, children: configHorizonsRuntimeErrorHandler, injectTo: 'head' },
				{ tag: 'script', attrs: { type: 'module' }, children: configHorizonsViteErrorHandler, injectTo: 'head' },
				{ tag: 'script', attrs: { type: 'module' }, children: configHorizonsConsoleErrroHandler, injectTo: 'head' },
				{ tag: 'script', attrs: { type: 'module' }, children: configWindowFetchMonkeyPatch, injectTo: 'head' },
			],
		};
	},
};

console.warn = () => {};

const logger = createLogger();
const loggerError = logger.error;
logger.error = (msg, options) => {
	if (options?.error?.toString().includes('CssSyntaxError: [postcss]')) return;
	loggerError(msg, options);
};

const plugins = [react(), addTransformIndexHtml];

if (isDev) {
	const inlineEditPlugin = (await import('./plugins/visual-editor/vite-plugin-react-inline-editor.js')).default;
	const editModeDevPlugin = (await import('./plugins/visual-editor/vite-plugin-edit-mode.js')).default;

	plugins.unshift(inlineEditPlugin(), editModeDevPlugin());
}

export default defineConfig({
	base: './', // 👈 ESSENCIAL
	customLogger: logger,
	plugins,
	server: {
		cors: true,
		headers: {
			'Cross-Origin-Embedder-Policy': 'credentialless',
		},
		allowedHosts: true,
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: 'dist',
		minify: 'terser',
		rollupOptions: {
			external: [
				'@babel/parser',
				'@babel/traverse',
				'@babel/generator',
				'@babel/types',
				'fsevents'
			],
			output: {
				manualChunks: {
					react: ['react', 'react-dom'],
					vendor: ['@vitejs/plugin-react']
				}
			}
		}
	}
});
