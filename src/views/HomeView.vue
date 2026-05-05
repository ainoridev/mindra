<script setup lang="ts">
import { reactive, ref } from 'vue'

import { useHomeHeroAnimations } from '@/animations/homePage'
import { createWaitlistLead } from '@/services/leads'

const homeRoot = ref<HTMLElement | null>(null)
const submitState = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const submitMessage = ref('')
const leadForm = reactive({
  fullName: '',
  email: '',
  interests: '',
})

useHomeHeroAnimations(homeRoot)

async function onSubmitLead() {
  if (submitState.value === 'loading') return
  submitState.value = 'loading'
  submitMessage.value = ''

  try {
    await createWaitlistLead({
      fullName: leadForm.fullName.trim(),
      email: leadForm.email.trim(),
      interests: leadForm.interests.trim(),
    })
    submitState.value = 'success'
    submitMessage.value = 'Gracias. Te avisaremos cuando abramos las primeras plazas.'
    leadForm.fullName = ''
    leadForm.email = ''
    leadForm.interests = ''
  } catch (error) {
    submitState.value = 'error'
    submitMessage.value =
      error instanceof Error ? error.message : 'No se pudo enviar. Inténtalo de nuevo.'
  }
}
</script>

<template>
  <div ref="homeRoot" class="landing">
    <nav class="nav">
      <div class="logo">
        <svg class="logo-octopus" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="18" cy="14" rx="10" ry="9" fill="#7c3aed" />
          <circle cx="14.5" cy="13" r="2" fill="white" />
          <circle cx="21.5" cy="13" r="2" fill="white" />
          <circle cx="14.8" cy="13.3" r="1" fill="#1a1035" />
          <circle cx="21.8" cy="13.3" r="1" fill="#1a1035" />
          <path d="M10 20 Q8 23 9 26 Q10 28 11 26 Q11 29 13 27 Q13 30 15 28" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <path d="M18 21 Q18 25 18 28 Q19 30 20 28 Q20 31 22 29" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <path d="M26 20 Q28 23 27 26 Q26 28 25 26 Q25 29 23 27 Q23 30 21 28" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round" fill="none" />
        </svg>
        Mink
      </div>
      <div class="nav-links">
        <a href="#vision">Visión</a>
        <a href="#features">Qué estamos construyendo</a>
        <a href="#waitlist">Probar primero</a>
      </div>
    </nav>

    <section id="vision" class="hero">
      <div class="hero-text">
        <div class="badge">App en desarrollo</div>
        <h1>
          Mink: gimnasio cognitivo
          <span class="highlight">adaptado a como te sientes hoy</span>
        </h1>
        <p>
          Todavía no estamos en tiendas. Esta landing explica lo que queremos construir y te deja
          apuntarte para ser de las primeras personas en probarlo.
        </p>
        <div class="hero-cta">
          <a class="btn-primary" href="#waitlist">Quiero acceso anticipado</a>
          <a class="btn-secondary" href="#features">Ver roadmap inicial</a>
        </div>
      </div>
      <div class="hero-mascot">
        <div class="mascot-blob" />
        <svg class="mascot-svg" width="260" height="260" viewBox="0 0 260 260" fill="none">
          <ellipse cx="130" cy="115" rx="68" ry="62" fill="#7c3aed" />
          <ellipse cx="112" cy="88" rx="22" ry="14" fill="#9d5ef0" opacity="0.5" />
          <ellipse cx="112" cy="110" rx="14" ry="14" fill="white" />
          <ellipse cx="148" cy="110" rx="14" ry="14" fill="white" />
          <circle cx="115" cy="112" r="8" fill="#1a1035" />
          <circle cx="151" cy="112" r="8" fill="#1a1035" />
          <path d="M118 128 Q130 138 142 128" stroke="#1a1035" stroke-width="2.5" stroke-linecap="round" />
          <ellipse cx="104" cy="124" rx="8" ry="5" fill="#ec4899" opacity="0.45" />
          <ellipse cx="156" cy="124" rx="8" ry="5" fill="#ec4899" opacity="0.45" />
          <path d="M64 110 Q50 108 46 118 Q43 128 55 130" stroke="#7c3aed" stroke-width="9" stroke-linecap="round" />
          <path d="M196 110 Q210 108 214 118 Q217 128 205 130" stroke="#7c3aed" stroke-width="9" stroke-linecap="round" />
          <path d="M90 170 Q82 185 86 198 Q88 205 94 200 Q94 210 100 205" stroke="#7c3aed" stroke-width="7" stroke-linecap="round" />
          <path d="M130 175 Q130 192 130 204 Q131 212 136 208 Q137 215 142 210" stroke="#7c3aed" stroke-width="7" stroke-linecap="round" />
          <path d="M170 170 Q178 185 174 198 Q172 205 166 200 Q166 210 160 205" stroke="#7c3aed" stroke-width="7" stroke-linecap="round" />
        </svg>
      </div>
    </section>

    <section class="stats-bar">
      <div class="stat"><span class="stat-num">100%</span><span class="stat-label">Gratuita</span></div>
      <div class="stat"><span class="stat-num">7-10m</span><span class="stat-label">Sesiones cortas</span></div>
      <div class="stat"><span class="stat-num">Mood first</span><span class="stat-label">Adaptada al día</span></div>
      <div class="stat"><span class="stat-num">Beta</span><span class="stat-label">Próximamente</span></div>
    </section>

    <section id="features" class="features">
      <h2 class="section-title">Lo que queremos lograr con Mink</h2>
      <p class="section-sub">
        Entrenamiento cognitivo diario, divertido, personal y totalmente gratis.
      </p>
      <div class="features-grid">
        <article class="feature-card purple">
          <span class="feature-icon">🧠</span>
          <h3>Entrenamiento según tu estado anímico</h3>
          <p>La sesión se adapta a tu energía y foco de ese día para que siempre te sume.</p>
        </article>
        <article class="feature-card teal">
          <span class="feature-icon">🎮</span>
          <h3>Gamificación de pruebas cortas</h3>
          <p>Retos breves y personalizados para potenciar cada área cognitiva sin saturarte.</p>
        </article>
        <article class="feature-card coral">
          <span class="feature-icon">🐙</span>
          <h3>Recompensas para Minky</h3>
          <p>Completar sesiones desbloquea skins para que tu mascota evolucione contigo.</p>
        </article>
        <article class="feature-card pink">
          <span class="feature-icon">📊</span>
          <h3>Estadísticas y comparativa con amigos</h3>
          <p>Verás tu progreso real en el tiempo y podrás comparar resultados con tu círculo.</p>
        </article>
        <article class="feature-card purple">
          <span class="feature-icon">🎓</span>
          <h3>Formaciones gratuitas</h3>
          <p>Incluiremos contenido educativo sin coste para entender y entrenar mejor tu mente.</p>
        </article>
        <article class="feature-card teal">
          <span class="feature-icon">🆓</span>
          <h3>Acceso completamente gratis</h3>
          <p>Queremos que cualquier persona pueda entrenar su mente sin barreras económicas.</p>
        </article>
      </div>
    </section>

    <section class="how">
      <h2 class="section-title">Cómo será la experiencia</h2>
      <p class="section-sub">Un flujo simple para crear hábito y medir mejora real.</p>
      <div class="steps">
        <article class="step"><div class="step-num p">1</div><h4>Check-in rápido</h4><p>Nos cuentas cómo te sientes hoy y el sistema ajusta la sesión.</p></article>
        <article class="step"><div class="step-num t">2</div><h4>Retos personalizados</h4><p>Pruebas cortas, dinámicas y adaptadas a ti.</p></article>
        <article class="step"><div class="step-num c">3</div><h4>Recompensas + datos</h4><p>Ganas ítems para Minky y ves tu evolución semana a semana.</p></article>
      </div>
    </section>

    <section id="waitlist" class="waitlist">
      <div class="waitlist-copy">
        <h2 class="section-title">Sé de los primeros en probar Mink</h2>
        <p class="section-sub">
          Estamos preparando la beta privada. Déjanos tu contacto y te escribimos cuando abramos.
        </p>
      </div>

      <form class="waitlist-card" @submit.prevent="onSubmitLead">
        <label class="field">
          <span>Nombre</span>
          <input v-model="leadForm.fullName" required type="text" autocomplete="name" placeholder="Tu nombre" />
        </label>
        <label class="field">
          <span>Email</span>
          <input v-model="leadForm.email" required type="email" autocomplete="email" placeholder="tu@email.com" />
        </label>
        <label class="field">
          <span>Qué te interesa más de Mink</span>
          <textarea v-model="leadForm.interests" rows="3" placeholder="Ej: mejorar memoria, competir con amigos, formaciones..." />
        </label>
        <button class="btn-primary waitlist-submit" :disabled="submitState === 'loading'" type="submit">
          {{ submitState === 'loading' ? 'Enviando...' : 'Quiero entrar en la beta' }}
        </button>
        <p v-if="submitMessage" :class="['submit-msg', submitState]">{{ submitMessage }}</p>
      </form>
    </section>

    <footer>
      <p>Mink está en desarrollo. Gracias por ayudarnos a construirla desde el inicio.</p>
    </footer>
  </div>
</template>

<style scoped>
.landing {
  --ink: #1a1035;
  --cream: #fffbf4;
  --purple: #7c3aed;
  --purple-light: #ede9fe;
  --teal: #0d9488;
  --teal-light: #ccfbf1;
  --coral: #f97316;
  --coral-light: #ffedd5;
  --pink: #ec4899;
  --pink-light: #fce7f3;
  --yellow: #fbbf24;
  --yellow-light: #fef3c7;
  background: var(--cream);
  color: var(--ink);
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2.5rem;
  border-bottom: 2px solid var(--purple-light);
  background: rgb(255 251 244 / 92%);
  backdrop-filter: blur(12px);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--purple);
  font-size: 1.7rem;
  font-weight: 900;
}

.logo-octopus {
  width: 36px;
  height: 36px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links a {
  padding: 0.4rem 1rem;
  border-radius: 999px;
  color: var(--ink);
  font-size: 0.95rem;
  font-weight: 700;
}

.nav-links a:hover {
  color: var(--purple);
  background: var(--purple-light);
}

.btn-nav {
  background: var(--purple);
  color: white !important;
}

.hero,
.features,
.waitlist {
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  flex-wrap: wrap;
}

.hero-text {
  flex: 1;
  min-width: 280px;
}

.badge {
  display: inline-flex;
  align-items: center;
  background: var(--teal-light);
  color: var(--teal);
  border: 2px solid #99f6e4;
  border-radius: 999px;
  padding: 0.35rem 1rem;
  margin-bottom: 1.2rem;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
}

.hero h1 {
  margin-bottom: 1rem;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.1;
  font-weight: 900;
  letter-spacing: -1.5px;
}

.highlight {
  background: linear-gradient(135deg, var(--purple), var(--pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  max-width: 460px;
  margin-bottom: 2rem;
  color: #4b4b6b;
  font-size: 1.1rem;
  line-height: 1.65;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 800;
  padding: 0.85rem 2rem;
}

.btn-primary {
  background: var(--purple);
  color: white;
  box-shadow: 0 4px 0 #5b21b6;
}

.btn-secondary {
  border: 2.5px solid var(--purple);
  color: var(--purple);
}

.hero-mascot {
  position: relative;
  flex: 0 0 340px;
  display: flex;
  justify-content: center;
}

.mascot-blob {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
  background: radial-gradient(circle at 40% 40%, #ede9fe, #fce7f3);
}

.mascot-svg {
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 12px 24px rgb(124 58 237 / 18%));
}

.stats-bar {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 1.4rem 2.5rem;
  color: white;
  background: var(--ink);
}

.stat {
  text-align: center;
}

.stat-num {
  display: block;
  color: var(--yellow);
  font-size: 1.7rem;
  font-weight: 900;
}

.stat-label {
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #a89fd8;
}

.features,
.waitlist {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.section-title {
  margin-bottom: 0.6rem;
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 900;
}

.section-sub {
  margin-bottom: 2.5rem;
  text-align: center;
  color: #6b6b8a;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.2rem;
}

.feature-card {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  padding: 1.8rem 1.6rem;
  background: white;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.feature-card.purple::before { background: var(--purple); }
.feature-card.teal::before { background: var(--teal); }
.feature-card.coral::before { background: var(--coral); }
.feature-card.pink::before { background: var(--pink); }

.feature-icon {
  display: block;
  margin-bottom: 1rem;
  font-size: 2.2rem;
}

.how {
  padding: 4rem 2.5rem;
  text-align: center;
  color: white;
  background: var(--ink);
}

.how .section-sub { color: #a89fd8; }
.steps { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; max-width: 900px; margin: 0 auto; }
.step { width: 200px; border-radius: 20px; border: 2px solid rgb(255 255 255 / 10%); padding: 1.8rem 1.5rem; background: rgb(255 255 255 / 6%); }
.step-num { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; margin: 0 auto 1rem; border-radius: 50%; font-weight: 900; }
.step-num.p { background: var(--purple); }
.step-num.t { background: var(--teal); }
.step-num.c { background: var(--coral); }
.step-num.y { background: var(--yellow); color: var(--ink); }

.waitlist {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  align-items: start;
}

.waitlist-card {
  border-radius: 20px;
  background: white;
  padding: 1.4rem;
  box-shadow: 0 10px 30px rgb(124 58 237 / 10%);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.9rem;
  font-size: 0.92rem;
  font-weight: 700;
}

.field input,
.field textarea {
  border: 2px solid #e6defa;
  border-radius: 12px;
  padding: 0.7rem 0.9rem;
  background: #fff;
  color: #1a1035;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 0 3px rgb(124 58 237 / 15%);
}

.waitlist-submit {
  width: 100%;
  border: 0;
  cursor: pointer;
}

.waitlist-submit:disabled {
  cursor: wait;
  opacity: 0.65;
}

.submit-msg {
  margin-top: 0.8rem;
  font-size: 0.9rem;
}

.submit-msg.success { color: #0d9488; }
.submit-msg.error { color: #b91c1c; }

footer {
  padding: 2rem;
  text-align: center;
  color: #8888aa;
  font-size: 0.85rem;
  font-weight: 700;
  background: var(--ink);
}

footer span { color: var(--purple); }

@media (max-width: 900px) {
  .nav { padding: 1rem; }
  .nav-links { display: none; }
  .hero,
  .features,
  .waitlist,
  .how,
  footer {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .waitlist {
    grid-template-columns: 1fr;
  }
}
</style>
