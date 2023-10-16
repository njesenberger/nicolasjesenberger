// https://nuxt.com/docs/api/configuration/nuxt-config
const metaTitle: string = 'Nicolas Jesenberger';
const metaDescription: string = 'Front-End Developer in Paris, France';
const metaUrl: string = 'https://nicolasjesenberger.com';
const metaImage: string = `${metaUrl}/images/og-image.png`;

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			title: metaTitle,
			meta: [
				{
					name: 'title',
					content: metaTitle,
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
				{
					property: 'og:type',
					content: 'website',
				},
				{
					property: 'og:url',
					content: metaUrl,
				},
				{
					property: 'og:title',
					content: metaTitle,
				},
				{
					property: 'og:description',
					content: metaDescription,
				},
				{
					property: 'og:image',
					content: metaImage,
				},
				{
					property: 'twitter:card',
					content: 'summary_large_image',
				},
				{
					property: 'twitter:url',
					content: metaUrl,
				},
				{
					property: 'twitter:title',
					content: metaTitle,
				},
				{
					property: 'twitter:description',
					content: metaDescription,
				},
				{
					property: 'twitter:image',
					content: metaImage,
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
	experimental: {
		inlineSSRStyles: false,
	},
});
