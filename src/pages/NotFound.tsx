import { useTranslation } from "react-i18next";

export default function NotFound() {
	const {t} = useTranslation("common")
	return (
		<main>
			<h1>{ t("404-page.title")}</h1>
			<h2>{t("404-page.desc")} {location.href}</h2>
		</main>
	);
}
