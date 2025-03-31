import { useEffect } from "react";
import styles from "@/styles/DarkmodeToggler.module.css";

export default function DarkmodeToggler() {
	useEffect(() => {
		document.getElementById(styles.darkModeToggler)!.textContent =
			localStorage.getItem("dark") === "true"
				? "light_mode"
				: "mode_night";
	});
	const toggleDarkmode = () => {
		const root = document.documentElement;
		const toggle = document.getElementById(styles.darkModeToggler);
		if (localStorage.getItem("dark") === "true") {
			localStorage.setItem("dark", "false");
			toggle!.innerText = "mode_night";
		} else {
			localStorage.setItem("dark", "true");
			toggle!.innerText = "light_mode";
		}
		root!.classList.toggle("dark");
	};
	return (
		<button id={styles.darkModeTogglerButton} onClick={toggleDarkmode}>
			<span id={styles.darkModeToggler} className="material-icons"></span>
		</button>
	);
}
