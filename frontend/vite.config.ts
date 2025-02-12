/// <reference types="vitest" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
// https://vite.dev/config/
export default defineConfig({
	test: {
		css: true,
		environment: "jsdom",
		setupFiles: ["src/test/setup.ts"],
	},
	plugins: [
		react(),
		tailwindcss(),
		tsconfigPaths(),
		TanStackRouterVite({ autoCodeSplitting: true }),
	],
});
