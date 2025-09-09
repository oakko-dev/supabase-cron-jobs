// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	modules: ["@prisma/nuxt"],
	devtools: { enabled: true },
	build: {
		transpile: ["@prisma/client"],
	},
	alias: {
		".prisma/client/index-browser": "@prisma/client",
		".prisma/client/default": "@prisma/client",
	},
})
