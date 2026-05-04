<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <header class="header">
      <RouterLink to="/" class="brand">Mink</RouterLink>
      <nav class="nav" aria-label="Principal">
        <RouterLink to="/about">Acerca de</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.brand {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-heading);
  text-decoration: none;
  padding: 0.25rem 0;
}

.brand:hover {
  color: #2d8aa0;
  background: transparent;
}

.nav {
  display: flex;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.nav a {
  padding: 0.35rem 0.65rem;
  border-radius: 0.5rem;
  color: var(--color-text);
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: #2d8aa0;
  background: var(--color-background-mute);
}

@media (hover: hover) {
  .nav a:hover {
    background: var(--color-background-soft);
  }
}
</style>
