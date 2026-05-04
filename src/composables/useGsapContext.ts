import { gsap } from 'gsap'
import { onMounted, onUnmounted, type Ref } from 'vue'

/**
 * Encapsula animaciones GSAP en un `gsap.context` ligado al DOM del componente.
 *
 * - Los selectores de texto (p. ej. `.box`) quedan acotados al nodo `scope` (evita fugas a otros componentes).
 * - `revert()` al desmontar revierte estilos inline, mata tweens y ScrollTriggers creados dentro del contexto.
 *
 * @see https://gsap.com/resources/frameworks/vue
 * @see https://gsap.com/docs/v3/GSAP/gsap.context()
 */
export function useGsapContext(scope: Ref<HTMLElement | null>, setup: () => void): void {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    const el = scope.value
    if (!el) return
    ctx = gsap.context(setup, el)
  })

  onUnmounted(() => {
    ctx?.revert()
    ctx = null
  })
}
