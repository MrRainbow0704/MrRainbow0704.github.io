<script>
	import { page } from "$app/state";
	import { t } from "svelte-i18n";
</script>

{#if page.status == 404}
	<div>
		<h1>{$t("404.title")}</h1>
		<h2>{$t("404.desc")} {window.location.href}</h2>
		<hr />
	</div>
{:else}
	<div>
		<h1>{$t("error.title")} {page.status}</h1>
		<h2>{page.error?.message}</h2>
		<hr />
		<p>{$t("error.desc")}</p>
		<p>{$t("error.contact")}</p>
	</div>
{/if}

<style>
	div {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: calc(var(--text-xl) * 3);
	}
	h1 {
		font-size: calc(var(--text-xl) * 2);
		font-weight: normal;
	}
	p {
		font-size: var(--text-xl);
	}
	hr {
		width: 75%;
		height: 1px;
		background-color: var(--color-primary);
		margin: var(--space-xl) 0;
	}
</style>
