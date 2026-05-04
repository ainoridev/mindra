import { gsap } from 'gsap'
import type { Ref } from 'vue'

import { useGsapContext } from '@/composables/useGsapContext'

/**
 * Animaciones de ejemplo en la landing: timeline de entrada + pulso vertical del SVG
 * + ScrollTrigger en un bloque inferior. Respeta `prefers-reduced-motion`.
 */
export function useHomeHeroAnimations(scope: Ref<HTMLElement | null>): void {
  useGsapContext(scope, () => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tl.from('.hero__visual', {
        autoAlpha: 0,
        scale: 0.92,
        duration: 0.65,
      })
        .from('.eyebrow', { y: 18, autoAlpha: 0, duration: 0.42 }, '-=0.48')
        .from('.hero__title', { y: 26, autoAlpha: 0, duration: 0.55 }, '-=0.32')
        .from('.hero__lead', { y: 20, autoAlpha: 0, duration: 0.48 }, '-=0.36')
        .from('.bullets li', { x: -10, autoAlpha: 0, stagger: 0.09, duration: 0.38 }, '-=0.28')
        .from(
          '.stores .store',
          { y: 14, autoAlpha: 0, stagger: 0.11, duration: 0.42 },
          '-=0.22',
        )

      gsap.to('.mascot', {
        y: -6,
        duration: 2.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.from('.gsap-scroll-demo__panel', {
        scrollTrigger: {
          trigger: '.gsap-scroll-demo',
          start: 'top 86%',
          toggleActions: 'play none none reverse',
        },
        y: 28,
        autoAlpha: 0,
        rotate: -1.5,
        duration: 0.7,
        ease: 'power2.out',
      })
    })

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(
        [
          '.hero__visual',
          '.eyebrow',
          '.hero__title',
          '.hero__lead',
          '.bullets li',
          '.stores .store',
          '.mascot',
          '.gsap-scroll-demo__panel',
        ],
        { autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: 0 },
      )
    })
  })
}
