<template>
	<NuxtLayout name="error">
		<Heading class="heading-1">404 — Page not found</Heading>
		<Link to="/">Go back to homepage</Link>
	</NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
	title: '404 — Page not found',
});
</script>
