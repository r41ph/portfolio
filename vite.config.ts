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
    {
      // default settings on build (i.e. fail on error)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ...eslint({ exclude: [/virtual:/, /node_modules/] }),
      apply: "build",
    },
    {
      // do not fail on serve (i.e. local development)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ...eslint({
        failOnWarning: false,
        failOnError: false,
        exclude: [/virtual:/, /node_modules/],
      }),
      apply: "serve",
      enforce: "post",
    },
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
