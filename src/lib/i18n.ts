import { browser } from "$app/environment";
import { init, getLocaleFromNavigator, addMessages } from "svelte-i18n";
import en from "$translations/en.json";
import it from "$translations/it.json";

export const langs = new Map<string, string>([
	["it", "Italiano"],
	["en", "English"],
]);

function userLocale(): string {
	if (!browser) {
		return "en";
	}
	const locale = localStorage.getItem("i18n-locale");
	if (locale) {
		return locale;
	}
	const navigatorLocale = getLocaleFromNavigator()!.substring(0, 2) || "en";
	localStorage.setItem("i18n-locale", navigatorLocale);
	return navigatorLocale;
}

addMessages("en", en);
addMessages("it", it);

init({
	fallbackLocale: "en",
	initialLocale: userLocale(),
});
