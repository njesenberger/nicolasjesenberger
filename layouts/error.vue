<template>
	<slot></slot>
</template>

<style lang="scss">
:root {
	color-scheme: dark;
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	padding: 0 24px;
	max-width: 35em;
	min-height: 100vh;
	min-height: 100dvh;
	background-color: var(--neutral-color-5);
	text-align: center;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Open Sans', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
	color: var(--neutral-color-2);
}

::selection {
	background-color: #0004bc;
	color: #fff;
}
</style>
