import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import styles from "@/styles/LanguageSelector.module.css";

export default function LanguageSelector() {
	polyfillCountryFlagEmojis();
	const [t, i18n] = useTranslation();

	useEffect(() => {
		document.documentElement.lang = i18n.language;
	});

	const toggleDropdown = () => {
		const h = document.getElementById(
			styles.languageSelectorDropdown
		)!.hidden;
		document.getElementById(styles.languageSelectorDropdown)!.hidden = !h;
	};

	const disableDropdown = () => {
		document.getElementById(styles.languageSelectorDropdown)!.hidden = true;
	};

	return (
		<>
			<button id={styles.languageSelectorButton} onClick={toggleDropdown}>
				{i18n.language === "it" ? "🇮🇹" : "🇬🇧"}
			</button>
			<div hidden id={styles.languageSelectorDropdown}>
				<span className={styles.header}>
					{t("language-selector.label")}
					<button onClick={disableDropdown}>&times;</button>
				</span>
				<div className={styles.languages}>
					<button
						disabled={i18n.language === "it"}
						className={[styles.it, styles.language].join(" ")}
						onClick={() => i18n.changeLanguage("it")}>
						Italiano
					</button>
					<button
						disabled={i18n.language === "en"}
						className={[styles.en, styles.language].join(" ")}
						onClick={() => i18n.changeLanguage("en")}>
						English
					</button>
				</div>
			</div>
		</>
	);
}
