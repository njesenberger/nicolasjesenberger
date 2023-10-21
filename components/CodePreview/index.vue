<template>
	<Section tag="article">
		<iframe
			class="code-preview"
			:title="title"
			:src="previewLink"
			height="300"
			tabindex="-1"
			aria-hidden="true"
		>
		</iframe>
		<header class="code-preview-description">
			<Heading class="code-preview-description-title">
				<Link :to="codepenLink" target="_blank">{{ title }}</Link>
			</Heading>
			<p class="code-preview-description-featured" v-if="codepenSparkId">
				· Featured in
				<Link :to="codepenSparkLink" target="_blank">CodePen Spark #{{ codepenSparkId }}</Link>
			</p>
		</header>
	</Section>
</template>

<script lang="ts" setup>
interface Props {
	title: string;
	slug: string;
	codepenId: string;
	codepenSparkId?: number;
}

const props: Props = defineProps<Props>();

const previewLink: string = `/codepen/${props.slug}`;
const codepenLink: string = `https://codepen.io/nicolasjesenberger/full/${props.codepenId}`;
const codepenSparkLink: string | null = typeof props.codepenSparkId === 'number' ? `https://codepen.io/spark/${props.codepenSparkId}` : null;
</script>

<style lang="scss" scoped>
.code-preview {
	border-radius: 4px;
	width: 100%;
}

.code-preview-description {
	margin-top: .5em;
}

.code-preview-description-title,
.code-preview-description-featured {
	display: inline;
}
</style>
