<script lang="ts">
	export let url: string;
	export let icon: string;
	export let alt: string;
</script>

<a target="_blank" href={url}>
	<img src={icon} {alt} />
</a>

<style>
	a {
		display: inline-block;
	}

	img {
		width: calc(var(--space-xl)* 1.5);
		height: calc(var(--space-xl)* 1.5);
		margin-right: var(--space-nm);
		filter: invert(0%) sepia(0%) saturate(3441%) hue-rotate(152deg)
			brightness(76%) contrast(92%);
	}

	:global(:root.dark) img {
		filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(5deg)
			brightness(108%) contrast(96%);
	}
</style>
