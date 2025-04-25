<script lang="ts">
	export let url: string;
	export let title: string;
	export let description: string;
</script>

<div>
	<h3>
		<a href={url}>{title}</a>
	</h3>
	<hr />
	<p>{description}</p>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		padding: var(--space-lg);
		margin: var(--space-lg);
		border-radius: var(--space-nm);
		max-height: calc(var(--space-xl)* 15);
		max-width: calc(var(--space-xl)* 20);
		background-color: var(--background-tertiary);
	}

	h3 {
		font-size: var(--text-lg);
		font-weight: bold;
		color: var(--text-primary);
	}

	p {
		overflow-y: auto;
	}

	p::-webkit-scrollbar {
		width: var(--space-sm);
	}

	p::-webkit-scrollbar-thumb {
		background-color: var(--accent-primary);
		width: var(--space-sm);
	}

	hr {
		margin-top: var(--space-nm);
		margin-bottom: var(--space-nm);
		border-color: var(--background-primary);
	}
</style>
