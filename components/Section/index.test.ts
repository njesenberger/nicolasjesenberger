import { describe, expect, it } from 'vitest';
import { mountSuspended } from 'nuxt-vitest/utils';
import Section from './index.vue';
import type { DefineComponent } from 'vue';
import type { VueWrapper } from '@vue/test-utils';

const TestComponent: DefineComponent = defineComponent({
	template: '<span id="provide-test">{{ value }}</span>',
	setup() {
		const value: number | undefined = inject('headingLevel');
		return { value };
	},
});

describe('by default', async () => {
	const wrapper: VueWrapper<any> = await mountSuspended(Section);

	it('renders a section tag', () => {
		expect(wrapper.element.tagName).toBe('SECTION');
	});

	it('has an empty slot', () => {
		expect(wrapper.text()).toBe('');
	});
});

describe('by default with content', async () => {
	const wrapper: VueWrapper<any> = await mountSuspended(Section, {
		slots: {
			default: h(TestComponent),
		},
	});

	it('renders the content', () => {
		expect(wrapper.text()).toBe('2');
	});

	it('provides a headingLevel of 2', () => {
		expect(wrapper.find('#provide-test').text()).toBe('2');
	});
});

describe('when setting a custom tag', async () => {
	const tag: string = 'article';

	const wrapper: VueWrapper<any> = await mountSuspended(Section, {
		props: {
			tag,
		},
	});

	it('renders the custom tag', () => {
		expect(wrapper.element.tagName).toBe(tag.toUpperCase());
	});
});

describe('when a headingLevel is injected', async () => {
	const headingLevel: number = 3;

	const wrapper: VueWrapper<any> = await mountSuspended(Section, {
		global: {
			provide: {
				headingLevel,
			},
		},
		slots: {
			default: () => h(TestComponent),
		},
	});

	it('provides its headingLevel + 1', () => {
		expect(wrapper.find('#provide-test').text()).toBe(`${headingLevel + 1}`);
	});
});
