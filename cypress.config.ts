import { defineConfig } from 'cypress';

export default defineConfig({
	component: {
		devServer: {
			framework: 'vue',
			bundler: 'vite',
			// viteConfig?: Will try to infer, if passed it will be used as is
		}
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
