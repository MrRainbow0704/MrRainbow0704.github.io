<script lang="ts">
import { t, locale, locales } from "svelte-i18n";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { langs } from "$lib/i18n";

let dropdown: HTMLDivElement;

function toggleDropdown() {
	dropdown.hidden = !dropdown.hidden;
}
function closeDropdown() {
	dropdown.hidden = true;
}
function changeLocale(l: string) {
	if (l !== $locale) {
		locale.set(l);
		localStorage.setItem("i18n-locale", l);
	}
	closeDropdown();
}

polyfillCountryFlagEmojis();
</script>

<div id="dropdown" bind:this={dropdown} hidden>
	<span>
		{$t("navbar.language-selector.label")}
		<button onclick={closeDropdown}>&times;</button>
	</span>
	<div class="languages">
		{#each $locales as l}
			<button
				disabled={l === $locale}
				class={[l, "language"].join(" ")}
				onclick={() => changeLocale(l)}>
				{langs.get(l)}
			</button>
		{/each}
	</div>
</div>
<button class="toggle" onclick={toggleDropdown}>
	<!-- {$locale === "it" ? "🇮🇹" : "🇬🇧"} -->
</button>

<style>
.toggle {
	cursor: pointer;
	background-color: transparent;
	border: none;
	width: calc(var(--space-xl) * 2);
	height: calc(var(--space-xl) * 2);
	color: var(--text-primary);
	font-size: 1.25rem;
	transform: translateY(-0.1rem);
}
#dropdown:has(.it:disabled) + .toggle::before {
	content: "\1F1EE\1F1F9\a0";
	display: inline-block;
	white-space: pre-wrap;
}
#dropdown:has(.en:disabled) + .toggle::before {
	content: "\1F1EC\1F1E7\a0";
	display: inline-block;
	white-space: pre-wrap;
}

#dropdown {
	position: absolute;
	right: 0;
	top: 0;
	width: calc(var(--space-xl) * 15);
	background-color: var(--background-tertiary);
	border-radius: var(--space-nm);
	padding: var(--space-nm);
	z-index: 1;
}

.it::before {
	content: "\1F1EE\1F1F9\a0";
	display: inline-block;
	white-space: pre-wrap;
}
.en::before {
	content: "\1F1EC\1F1E7\a0";
	display: inline-block;
	white-space: pre-wrap;
}

.languages {
	display: flex;
	flex-direction: column;
	align-items: start;
}

.language {
	background-color: transparent;
	border: none;
	color: var(--accent-primary);
	cursor: pointer;
}
.language:disabled {
	color: var(--text-tertiary);
	cursor: not-allowed;
	font-weight: bold;
	text-decoration: underline;
}

span {
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	button {
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: var(--text-primary);
	}
}
</style>
