import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		appDir: "app",
		alias: {
			$assets: "./src/assets",
			$translations: "./src/translations",
		},
		adapter: adapter({
			fallback: "404.html",
		}),
		paths: {
			base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
		},
	},
};

export default config;
