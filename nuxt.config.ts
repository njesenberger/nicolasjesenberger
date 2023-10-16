// https://nuxt.com/docs/api/configuration/nuxt-config
const metaDescription: string = 'Front-end developer passionate about design, I take pride in crafting aesthetically pleasing and user‑friendly interfaces with meticulous attention to detail. In my spare time, I create UI elements I share on Twitter and CodePen.';

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			title: 'Nicolas Jesenberger',
			meta: [
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
