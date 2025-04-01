import { useEffect } from "react";
import styles from "@/styles/DarkmodeToggler.module.css";

function toggleDarkmode(old: string) {
	if (old === "true") {
		document.documentElement!.classList.remove("dark");
		document.getElementById(styles.darkModeToggler)!.innerText =
			"mode_night";
		localStorage.setItem("dark", "false");
	} else {
		document.documentElement!.classList.add("dark");
		document.getElementById(styles.darkModeToggler)!.innerText =
			"light_mode";
		localStorage.setItem("dark", "true");
	}
}

export default function DarkmodeToggler() {
	useEffect(() => {
		document.getElementById(styles.darkModeToggler)!.textContent =
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

	return (
		<button
			id={styles.darkModeTogglerButton}
			onClick={() => {
				toggleDarkmode(localStorage.getItem("dark")!);
			}}>
			<span id={styles.darkModeToggler} className="material-icons"></span>
		</button>
	);
}
