<script lang="ts">
import { onMount } from "svelte";

let darkMode: HTMLSpanElement;
let root: HTMLBodyElement;
function toggleDarkmode(old: string) {
	if (old === "true") {
		root.classList.remove("dark");
		darkMode.innerText = "mode_night";
		localStorage.setItem("dark", "false");
	} else {
		root.classList.add("dark");
		darkMode.innerText = "light_mode";
		localStorage.setItem("dark", "true");
	}
}

onMount(() => {
	darkMode.textContent =
		localStorage.getItem("dark") === "true" ? "light_mode" : "mode_night";
	if (localStorage.getItem("dark") === "true") {
		root.classList.add("dark");
	} else {
		root.classList.remove("dark");
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

<svelte:body bind:this={root} />
<button
	onclick={() => {
		toggleDarkmode(localStorage.getItem("dark")!);
	}}
	aria-label="Toggle dark mode">
	<span bind:this={darkMode} class="material-icons"></span>
</button>

<style>
button {
	cursor: pointer;
	background-color: transparent;
	border: none;
	width: calc(var(--space-xl) * 2);
	height: calc(var(--space-xl) * 2);
}
span {
	color: var(--text-primary);
}
</style>
