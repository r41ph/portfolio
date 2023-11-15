/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare module "vite-plugin-eslint";

interface ImportMetaEnv {
  readonly VITE_UNSPLASH_ACCESS_KEY: string;
  readonly VITE_JWT_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
