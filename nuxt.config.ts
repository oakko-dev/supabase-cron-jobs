import { fileURLToPath } from "node:url"
// https://nuxt.com/docs/api/configuration/nuxt-config

// const resolver = createResolver(import.meta.url)

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	modules: ["@prisma/nuxt"],
	devtools: { enabled: true },
	vite: {
		resolve: {
			// fix for vite/prisma build issue
			alias: {
				".prisma/client/index-browser": fileURLToPath(
					new URL("./node_modules/@prisma/client/index-browser.js", import.meta.url),
				),
			},
		},
	},
})
