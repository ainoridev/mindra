/**
 * Registro global de plugins GSAP (una sola vez al arrancar la app).
 * Importa este módulo en `main.ts` antes de `app.mount`.
 *
 * @see https://gsap.com/docs/v3/Plugins/ScrollTrigger
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
