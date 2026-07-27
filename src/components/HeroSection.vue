<script setup>
import { Sparkles, ArrowDown } from 'lucide-vue-next'

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="hero-section">
    <div class="container hero-container animate-fade-in">
      <!-- Top Botanical Icon -->
      <div class="botanical-header">
        <svg class="botanical-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M50 85 C50 60 30 50 20 30 C30 35 45 45 50 60 C55 45 70 35 80 30 C70 50 50 60 50 85 Z" />
          <path d="M50 60 C40 45 35 30 35 15 C45 25 48 40 50 55 C52 40 55 25 65 15 C65 30 60 45 50 60 Z" />
          <circle cx="50" cy="12" r="2" fill="currentColor" />
        </svg>
      </div>

      <!-- Main Headline -->
      <span class="script-text text-center">{{ info.subtitle }}</span>
      <h1 class="hero-title text-center">HOŞ GELDİNİZ</h1>

      <p class="hero-bio text-center">
        {{ info.bioShort }}
      </p>

      <div class="hero-actions">
        <a href="#about" class="btn btn-primary">
          <span>Hikayemi Keşfet</span>
        </a>
        <a href="#projects" class="btn btn-outline">
          <span>Projelerimi İncele</span>
        </a>
      </div>

      <!-- Portrait Frame Showcase -->
      <div class="portrait-wrapper">
        <div class="portrait-frame">
          <img :src="info.heroImage" :alt="info.name" class="portrait-img" />
          <div class="portrait-badge">
            <Sparkles :size="14" />
            <span>Kişisel Portfolyo</span>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <a href="#about" class="scroll-down" aria-label="Aşağı kaydır">
        <ArrowDown :size="20" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 4rem 0 3rem;
  text-align: center;
  position: relative;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 850px;
}

.botanical-header {
  margin-bottom: 1rem;
  color: var(--accent-gold);
}

.text-center {
  text-align: center;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: 3rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0.5rem 0 1.2rem;
  color: var(--text-primary);
}

.hero-bio {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 650px;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-weight: 300;
}

.hero-actions {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 3.5rem;
}

.portrait-wrapper {
  position: relative;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
}

.portrait-frame {
  position: relative;
  border-radius: var(--radius-lg);
  padding: 12px;
  border: 1px solid var(--border-color-gold);
  background: var(--bg-card);
  box-shadow: var(--shadow-soft);
}

.portrait-img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  object-position: center 72%;
  border-radius: var(--radius-md);
  filter: brightness(0.98) contrast(1.02);
}

.portrait-badge {
  position: absolute;
  bottom: -15px;
  right: 30px;
  background: var(--accent-gold);
  color: var(--bg-secondary);
  padding: 0.4rem 1.2rem;
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: var(--shadow-gold);
}

.scroll-down {
  margin-top: 3rem;
  color: var(--accent-gold);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .portrait-img {
    height: 280px;
  }
}
</style>
