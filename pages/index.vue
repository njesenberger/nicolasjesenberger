<template>
	<header>
		<img class="profile-picture" src="/images/me.jpg" alt="">
		<Heading :style-level="1">Nicolas Jesenberger</Heading>
		<p>Front-End Developer open to work</p>
	</header>
	<Divider />
	<main>
		<Section class="section">
			<Heading class="section-heading visually-hidden" :style-level="1">About me</Heading>
			<p>
				Passionate about design, I take pride in crafting aesthetically pleasing
				and user&#8209;friendly interfaces with meticulous attention to detail.
				In my spare time, I create UI elements I share on
				<Link to="https://twitter.com/njesenberger" target="_blank">Twitter</Link>
				and
				<Link to="https://codepen.io/nicolasjesenberger" target="_blank">CodePen</Link>.
			</p>
		</Section>
		<Section class="section">
			<Heading class="section-heading" :style-level="1">Work history</Heading>
			<dl class="work-history-list">
				<dt>2022 — 2023</dt>
				<dd>Front-End Lead, IDLABS&nbsp;Studio</dd>
				<dt>2020 — 2022</dt>
				<dd>Front-End (work-study), IDLABS&nbsp;Studio</dd>
				<dt>2020 — 2020</dt>
				<dd>Front-End (internship), IDLABS&nbsp;Studio</dd>
			</dl>
		</Section>
		<Section class="section">
			<Heading class="section-heading" :style-level="1">Education</Heading>
			<dl class="education-list">
				<dt>2019 — 2022</dt>
				<dd>Web Developer Bachelor, HETIC</dd>
			</dl>
		</Section>
		<Section class="section">
			<Heading class="section-heading" :style-level="1">Selected CodePens</Heading>
			<p>
				For additional works, browse my
				<Link to="https://twitter.com/njesenberger" target="_blank">Twitter</Link>
				or
				<Link to="https://codepen.io/nicolasjesenberger" target="_blank">CodePen</Link>.
			</p>
			<ul class="code-preview-list">
				<li class="code-preview-list-item" v-for="codePreview in codePreviews" :key="codePreview.slug">
					<CodePreview v-bind="codePreview" />
				</li>
			</ul>
		</Section>
		<Section class="section">
			<Heading class="section-heading" :style-level="1">Get in touch</Heading>
			<ul class="contact-links-list">
				<li>
					<Link to="https://twitter.com/njesenberger" target="_blank">Twitter</Link>
				</li>
				<li>
					<Link to="https://www.linkedin.com/in/nicolas-jesenberger/" target="_blank">LinkedIn</Link>
				</li>
			</ul>
		</Section>
	</main>
</template>

<script lang="ts" setup>
useHead({
	title: 'Nicolas Jesenberger',
	meta: [
		{
			name: 'description',
			content: `
				Passionate about design, I take pride in crafting aesthetically pleasing and
				user‑friendly interfaces with meticulous attention to detail.
				In my spare time, I create UI elements I share on Twitter and CodePen.
			`,
		},
	],
});

interface CodePreview {
	title: string;
	slug: string;
	codepenId: string;
	codepenSparkId?: number;
}

const codePreviews: CodePreview[] = [
	{
		title: 'Functional Egg Timer',
		slug: 'egg-timer',
		codepenId: 'MWZLVLo',
		codepenSparkId: 353,
	},
	{
		title: 'Lego Elements',
		slug: 'lego-elements',
		codepenId: 'MWZLVLo',
		codepenSparkId: 362,
	},
	{
		title: 'Joystick Toggles',
		slug: 'joystick-toggle',
		codepenId: 'WNaqEgp',
		codepenSparkId: 355,
	},
];
</script>


<style lang="scss" scoped>
.profile-picture {
	margin-bottom: 1em;
	border-radius: 50%;
	width: 40px;
	height: 40px;
}

.section {
	margin-top: 2em;
}

.section-heading {
	margin-bottom: .5em;
}

.work-history-list,
.education-list {
	display: grid;
	grid-template-columns: auto 1fr;
	column-gap: 1.5em;
}

.code-preview-list {
	margin-top: 1em;
}

.code-preview-list-item {
	&:not(:first-child) {
		margin-top: 1.5em;
	}
}

.contact-links-list {
	display: flex;
	column-gap: 1.5em;
}
</style>
