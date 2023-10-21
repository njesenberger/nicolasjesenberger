<template>
	<component :is="headingTag">
		<slot></slot>
	</component>
</template>

<script lang="ts" setup>
const headingLevel: number = inject('headingLevel', 1);

const headingTag: string = `h${headingLevel}`;
</script>
