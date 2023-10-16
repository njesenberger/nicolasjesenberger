<template>
	<slot></slot>
</template>

<style lang="scss">
:root {
	color-scheme: dark;
}

body {
	margin: 0 auto;
	padding: 120px 24px 24px;
	max-width: 540px;
	background-color: var(--neutral-color-6);
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Open Sans', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
	color: var(--neutral-color-2);
}

::selection {
	background-color: #0004bc;
	color: #fff;
}
</style>
