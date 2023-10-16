<template>
	<component :is="tag">
		<slot></slot>
	</component>
</template>

<script lang="ts" setup>
interface Props {
	tag?: 'article' | 'aside' | 'nav' | 'section';
}

withDefaults(defineProps<Props>(), {
	tag: 'section',
});

const headingLevel: number = inject('headingLevel', 1) + 1;

provide('headingLevel', headingLevel);
</script>
