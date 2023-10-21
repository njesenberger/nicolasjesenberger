import { describe, expect, it } from 'vitest';
import { mountSuspended } from 'nuxt-vitest/utils';
import type { VueWrapper } from '@vue/test-utils';
import Heading from './index.vue';

describe('by default', async () => {
	const wrapper: VueWrapper<any> = await mountSuspended(Heading);

	it('renders a h1 tag', () => {
		expect(wrapper.element.tagName).toBe('H1');
	});

	it('has an empty slot', () => {
		expect(wrapper.text()).toBe('');
	});
});

describe('when passing content inside the slot', async () => {
	const content: string = 'Hello World';

	const wrapper: VueWrapper<any> = await mountSuspended(Heading, {
		slots: {
			default: content,
		},
	});

	it('renders the content', () => {
		expect(wrapper.text()).toBe(content);
	});
});

describe('when passing a heading level', async () => {
	const headingLevel: number = 3;

	const wrapper: VueWrapper<any> = await mountSuspended(Heading, {
		global: {
			provide: {
				headingLevel,
			},
		},
	});

	it('renders the corresponding h tag', () => {
		expect(wrapper.element.tagName).toBe('H3');
	});
});
