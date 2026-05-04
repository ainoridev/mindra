/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL del backend (sin barra final). Ej.: `https://api.example.com` */
  readonly VITE_API_BASE_URL?: string
  /** Enlace público a la ficha en App Store */
  readonly VITE_STORE_IOS?: string
  /** Enlace público a la ficha en Google Play */
  readonly VITE_STORE_ANDROID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
