import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";
import App from "@/components/App";
import "@/styles/reset.css";
import "@/styles/index.css";
import common_it from "@/translations/it/common.json";
import common_en from "@/translations/en/common.json";

i18next.use(LanguageDetector).init({
	interpolation: { escapeValue: false },
	supportedLngs: ["en", "it"],
	detection: {
		order: ["cookie", "localStorage", "navigator"],
		caches: ["localStorage", "cookie"],
	},
	fallbackLng: "en",
	resources: {
		en: {
			common: common_en,
		},
		it: {
			common: common_it,
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</StrictMode>
);
