// import { defineConfig } from 'vitest/config';
import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
	test: {
		environment: 'nuxt',
	},
});
