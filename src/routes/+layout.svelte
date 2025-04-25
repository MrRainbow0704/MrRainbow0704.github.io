<script lang="ts">
	import { writable } from "svelte/store";
	import { t, waitLocale } from "svelte-i18n";
	import DarkModeToggler from "$lib/DarkModeToggler.svelte";
	import LanguageSelector from "$lib/LanguageSelector.svelte";

	let { children } = $props();

	let loaded = writable(false);

	waitLocale().then(() => {
		loaded.set(true);
	});
</script>

<header>
	<h1>Marco Simone</h1>
</header>
{#if $loaded}
	<nav>
		<ul>
			<li>
				<a href="/">{$t("navbar.link.home")}</a>
			</li>
			<li>
				<a href="/contact-me">{$t("navbar.link.contacts")}</a>
			</li>
		</ul>
		<span class="buttons">
			<DarkModeToggler />
			<LanguageSelector />
		</span>
	</nav>
	{@render children()}
{:else}
	<nav></nav>
	<p>Loading...</p>
{/if}
<footer>
	<p>&copy; 2025 Marco Simone</p>
</footer>

<style>
	header {
		text-align: center;
		padding: 0;
		margin: 0;
		font-size: var(--text-xl);
		background-color: var(--background-secondary);
	}

	nav {
		background-color: var(--background-secondary);
		position: relative;
		padding-bottom: var(--space-nm);

		> .buttons {
			position: absolute;
			top: 0;
			right: 0;
			display: flex;
			flex-direction: row;
		}
		> ul {
			list-style-type: none;
			text-align: center;
			padding: 0;
			> li {
				display: inline;
				padding: 0 var(--space-nm);
			}
		}
	}

	footer {
		font-size: var(--text-xs);
		min-height: calc(var(--space-xl)* 1.5);
		text-align: center;
	}
</style>
