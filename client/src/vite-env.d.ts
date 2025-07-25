/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // add other env vars you plan to use, all must start with VITE_
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

