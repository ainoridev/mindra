import { gsap } from 'gsap'
import type { Ref } from 'vue'

import { useGsapContext } from '@/composables/useGsapContext'

/**
 * Animaciones de entrada para la landing promocional.
 */
export function useHomeHeroAnimations(scope: Ref<HTMLElement | null>): void {
  useGsapContext(scope, () => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tl.from('.hero-text', {
        autoAlpha: 0,
        y: 18,
        duration: 0.65,
      })
        .from('.hero-mascot', { autoAlpha: 0, scale: 0.92, duration: 0.65 }, '-=0.45')
        .from('.stats-bar .stat', { y: 14, autoAlpha: 0, stagger: 0.09, duration: 0.3 }, '-=0.2')

      gsap.to('.mascot-svg', {
        y: -12,
        duration: 3.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.features',
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        y: 20,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.45,
        ease: 'power2.out',
      })

      gsap.from('.waitlist-card', {
        scrollTrigger: {
          trigger: '.waitlist',
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        y: 18,
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    })

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(
        ['.hero-text', '.hero-mascot', '.stats-bar .stat', '.feature-card', '.mascot-svg', '.waitlist-card'],
        { autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: 0 },
      )
    })
  })
}
