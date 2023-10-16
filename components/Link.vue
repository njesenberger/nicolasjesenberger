<template>
	<NuxtLink class="link">
		<slot></slot>
	</NuxtLink>
</template>

<style lang="scss" scoped>
@mixin link-hover-focus-styles {
	color: #fff;
	text-decoration-thickness: 2px;
	text-decoration-color: var(--neutral-color-3);
}

.link {
	color: var(--neutral-color-3);
	text-decoration-line: underline;
	text-underline-offset: 2px;
	text-decoration-color: var(--neutral-color-4);
	transition-property: color, text-decoration-color, text-decoration-thickness;
	transition-duration: .2s, .2s, 0s;

	@media (hover: hover) {
		&:hover {
			@include link-hover-focus-styles;
		}
	}

	&:focus-visible {
		@include link-hover-focus-styles;
	}
}
</style>
