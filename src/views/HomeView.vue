<script setup lang="ts">
const storeIos = import.meta.env.VITE_STORE_IOS?.trim() || '#'
const storeAndroid = import.meta.env.VITE_STORE_ANDROID?.trim() || '#'
</script>

<template>
  <div class="home">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__visual" aria-hidden="true">
        <svg class="mascot" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mascot-body" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#5ec4d4" />
              <stop offset="100%" stop-color="#2d8aa0" />
            </linearGradient>
          </defs>
          <path
            fill="none"
            stroke="#2d8aa0"
            stroke-width="10"
            stroke-linecap="round"
            d="M42 168 Q20 195 28 212"
          />
          <path
            fill="none"
            stroke="#2d8aa0"
            stroke-width="10"
            stroke-linecap="round"
            d="M68 178 Q52 208 58 218"
          />
          <path
            fill="none"
            stroke="#3a9eb0"
            stroke-width="10"
            stroke-linecap="round"
            d="M100 182 Q100 212 100 218"
          />
          <path
            fill="none"
            stroke="#2d8aa0"
            stroke-width="10"
            stroke-linecap="round"
            d="M132 178 Q148 208 142 218"
          />
          <path
            fill="none"
            stroke="#2d8aa0"
            stroke-width="10"
            stroke-linecap="round"
            d="M158 168 Q180 195 172 212"
          />
          <ellipse cx="100" cy="108" rx="72" ry="68" fill="url(#mascot-body)" />
          <ellipse cx="100" cy="118" rx="56" ry="52" fill="#4eb8c9" opacity="0.35" />
          <circle cx="76" cy="96" r="18" fill="#fff" />
          <circle cx="124" cy="96" r="18" fill="#fff" />
          <circle cx="80" cy="98" r="9" fill="#0c2f38" />
          <circle cx="128" cy="98" r="9" fill="#0c2f38" />
          <circle cx="83" cy="94" r="3" fill="#fff" opacity="0.9" />
          <circle cx="131" cy="94" r="3" fill="#fff" opacity="0.9" />
          <path
            d="M88 128 Q100 138 112 128"
            fill="none"
            stroke="#0c2f38"
            stroke-width="4"
            stroke-linecap="round"
            opacity="0.35"
          />
        </svg>
        <p class="hero__caption">Ilustración temporal: podrás sustituirla por tu mascota.</p>
      </div>

      <div class="hero__copy">
        <p class="eyebrow">Gimnasio cognitivo</p>
        <h1 id="hero-title" class="hero__title">Mink</h1>
        <p class="hero__lead">
          Entrena memoria, atención y agilidad mental con sesiones breves y guiadas. Tu pulpo te
          acompaña para que entrenar sea fácil y divertido.
        </p>
        <ul class="bullets" role="list">
          <li>Ejercicios pensados para el día a día</li>
          <li>Progreso claro, sin complicaciones</li>
          <li>En el móvil, cuando quieras</li>
        </ul>

        <div class="stores">
          <a
            class="store store--ios"
            :href="storeIos"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="store__label">Descargar en</span>
            <span class="store__name">App Store</span>
          </a>
          <a
            class="store store--android"
            :href="storeAndroid"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="store__label">Disponible en</span>
            <span class="store__name">Google Play</span>
          </a>
        </div>
        <p v-if="storeIos === '#' && storeAndroid === '#'" class="stores-hint">
          Configura <code>VITE_STORE_IOS</code> y <code>VITE_STORE_ANDROID</code> en
          <code>.env.local</code> con los enlaces reales a las tiendas.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 4rem);
}

.hero {
  display: grid;
  gap: 2.5rem;
  align-items: center;
  padding: 1rem 0 3rem;
}

@media (min-width: 768px) {
  .hero {
    grid-template-columns: 1fr 1.1fr;
    gap: 3rem;
    padding: 2rem 0 4rem;
  }
}

.hero__visual {
  text-align: center;
}

.mascot {
  width: min(220px, 70vw);
  height: auto;
  filter: drop-shadow(0 12px 24px rgba(12, 47, 56, 0.2));
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.hero__caption {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: var(--color-text);
  opacity: 0.65;
  max-width: 16rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.4;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2d8aa0;
  margin-bottom: 0.35rem;
}

.hero__title {
  font-size: clamp(2.75rem, 8vw, 3.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-heading);
  line-height: 1.05;
  margin-bottom: 0.75rem;
}

.hero__lead {
  font-size: 1.1rem;
  line-height: 1.55;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  max-width: 36ch;
}

.bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bullets li {
  position: relative;
  padding-left: 1.35rem;
  font-size: 0.98rem;
  color: var(--color-text);
  opacity: 0.92;
}

.bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: #5ec4d4;
  box-shadow: 0 0 0 2px rgba(94, 196, 212, 0.35);
}

.stores {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.store {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.65rem 1.25rem;
  border-radius: 0.75rem;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  color: var(--color-heading);
  font-weight: 600;
  min-width: 11rem;
  transition:
    border-color 0.2s,
    transform 0.2s,
    box-shadow 0.2s;
}

.store:hover {
  border-color: #5ec4d4;
  box-shadow: 0 4px 16px rgba(45, 138, 160, 0.15);
  transform: translateY(-1px);
}

.store__label {
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.75;
}

.store__name {
  font-size: 1.05rem;
  margin-top: 0.1rem;
}

.stores-hint {
  margin-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.7;
  max-width: 32rem;
  line-height: 1.45;
}

.stores-hint code {
  font-size: 0.78em;
  padding: 0.1em 0.35em;
  border-radius: 0.25rem;
  background: var(--color-background-mute);
}
</style>
