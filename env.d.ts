/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL del backend (sin barra final). Ej.: `https://api.example.com` */
  readonly VITE_API_BASE_URL?: string
  /** Endpoint público para insertar leads de la waitlist */
  readonly VITE_LEADS_API_URL?: string
  /** Supabase project URL */
  readonly VITE_SUPABASE_URL?: string
  /** Supabase publishable public key */
  readonly VITE_SUPABASE_PUBLISHABLE_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
