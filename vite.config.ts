/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";
import macrosPlugin from "vite-plugin-babel-macros";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ plugins: [["@swc/plugin-styled-components", {}]] }),
    macrosPlugin(),
    svgr(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    eslint(),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer, tailwindcss],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test-utils/setupTest.ts"],
  },
});
