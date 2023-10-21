import { describe, expect, it } from 'vitest';
import { mountSuspended } from 'nuxt-vitest/utils';
import type { VueWrapper } from '@vue/test-utils';
import CodePreview from './index.vue';

describe('by default', async () => {
	const wrapper: VueWrapper<any> = await mountSuspended(CodePreview, {
		props: {
			title: 'Title',
			slug: 'slug',
			codepenId: 'codepenId',
		},
	});

	describe('the iframe', () => {
		it('has correct title attribute', () => {
			expect(wrapper.find('iframe').attributes('title')).toBe('Title');
		});

		it('has correct src attribute', () => {
			expect(wrapper.find('iframe').attributes('src')).toBe('/codepen/slug');
		});

		it('isn’t focusable', () => {
			expect(wrapper.find('iframe').attributes('tabindex')).toBe('-1');
		});

		it('is hidden to accessibility tree', () => {
			expect(wrapper.find('iframe').attributes('aria-hidden')).toBe('true');
		});
	});


	it('renders the title', () => {
		expect(wrapper.html()).toContain('Title');
	});

	it('renders a link to the codepen', () => {
		expect(wrapper.find('a[href="https://codepen.io/nicolasjesenberger/full/codepenId"]').exists()).toBe(true);
	});

	it('doesn’t render the codepen spark link', () => {
		expect(wrapper.find('a[href^="https://codepen.io/spark/"]').exists()).toBe(false);
	});
});

describe('when codepenSparkId is provided', async () => {
	const wrapper: VueWrapper<any> = await mountSuspended(CodePreview, {
		props: {
			title: 'Title',
			slug: 'slug',
			codepenId: 'codepenId',
			codepenSparkId: 123,
		},
	});

	it('renders the codepen spark link', () => {
		expect(wrapper.find('a[href="https://codepen.io/spark/123"]').exists()).toBe(true);
	});
});
