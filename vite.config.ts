import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // default settings on build (i.e. fail on error)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ...eslint(),
      apply: "build",
    },
    {
      // do not fail on serve (i.e. local development)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ...eslint({
        failOnWarning: false,
        failOnError: false,
      }),
      apply: "serve",
      enforce: "post",
    },
  ],
});
