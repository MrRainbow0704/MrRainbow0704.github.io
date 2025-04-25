import { browser } from "$app/environment";
import { register, init, getLocaleFromNavigator } from "svelte-i18n";

register("en", () => import("$translations/en.json"));
register("it", () => import("$translations/it.json"));

const userLocale = () => {
  if (!browser) {
    return "it"
  }
  const locale = localStorage.getItem("i18n-locale")
  if (locale) {
    return locale
  }
  const navigatorLocale = getLocaleFromNavigator()!.substring(0, 2)
  localStorage.setItem("i18n-locale", navigatorLocale)
  return navigatorLocale
}


init({
  fallbackLocale: "en",
  initialLocale: userLocale(),
});