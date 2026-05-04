/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL del backend (sin barra final). Ej.: `https://api.example.com` */
  readonly VITE_API_BASE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
