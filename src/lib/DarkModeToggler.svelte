<script lang="ts">
	import { onMount } from "svelte";

	function toggleDarkmode(old: string) {
		if (old === "true") {
			document.documentElement!.classList.remove("dark");
			document.getElementById("darkModeToggler")!.innerText =
				"mode_night";
			localStorage.setItem("dark", "false");
		} else {
			document.documentElement!.classList.add("dark");
			document.getElementById("darkModeToggler")!.innerText =
				"light_mode";
			localStorage.setItem("dark", "true");
		}
	}

	onMount(() => {
		document.getElementById("darkModeToggler")!.textContent =
			localStorage.getItem("dark") === "true"
				? "light_mode"
				: "mode_night";
		if (localStorage.getItem("dark") === "true") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (e) => {
				toggleDarkmode(`${!e.matches}`);
			});

		return () => {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.removeEventListener("change", () => {});
		};
	});
</script>

<button
	id="darkModeTogglerButton"
	onclick={() => {
		toggleDarkmode(localStorage.getItem("dark")!);
	}}
	aria-label="Toggle dark mode"
>
	<span id="darkModeToggler" class="material-icons"></span>
</button>

<style>
	button {
		cursor: pointer;
		background-color: transparent;
		border: none;
		width: calc(var(--space-xl) * 2);
		height: calc(var(--space-xl) * 2);
	}
	#darkModeToggler {
		color: var(--text-primary);
	}
</style>
