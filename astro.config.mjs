// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
	compressHTML: true,
});
