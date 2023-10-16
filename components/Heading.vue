<template>
	<component :class="headingStyleClass" :is="headingTag">
		<slot></slot>
	</component>
</template>

<script lang="ts" setup>
interface Props {
	styleLevel?: 1;
}

const props: Props = defineProps<Props>();

const headingLevel: number = inject('headingLevel', 1);

const headingTag: string = `h${headingLevel}`;
const headingStyleClass: string | null = typeof props.styleLevel === 'number' ? `heading-${props.styleLevel}` : null;
</script>

<style lang="scss" scoped>
.heading-1 {
	font-weight: var(--font-weight-medium);
	color: var(--neutral-color-1);
}
</style>
