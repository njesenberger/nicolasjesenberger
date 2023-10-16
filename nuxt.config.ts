// https://nuxt.com/docs/api/configuration/nuxt-config
const metaDescription: string = 'Front-End Developer in Paris, France';

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			title: 'Nicolas Jesenberger',
			meta: [
				{
					name: 'title',
					content: 'Nicolas Jesenberger',
				},
				{
					name: 'description',
					content: metaDescription,
				},
				{
					name: 'color-scheme',
					content: 'dark',
				},
				{
					name: 'theme-color',
					content: '#0b0d16',
				},
			],
			link: [
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/apple-touch-icon.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/favicon-32x32.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/favicon-16x16.png',
				},
				{
					rel: 'manifest',
					href: '/site.webmanifest',
				},
			],
		},
	},
	css: ['~/assets/scss/styles.scss'],
	components: [
		{
			path: '~/components',
			pathPrefix: false,
			priority: 11,
		},
	],
	pages: true,
});
