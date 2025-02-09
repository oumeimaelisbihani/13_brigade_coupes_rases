/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
// https://vite.dev/config/
export default defineConfig({
	test: {
		css: true,
	},
	plugins: [
		react(),
		tailwindcss(),
		tsconfigPaths(),
		TanStackRouterVite({ autoCodeSplitting: true }),
	],
});
