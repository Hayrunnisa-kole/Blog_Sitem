<script setup>
import { Sparkles, Check } from 'lucide-vue-next'

const props = defineProps({
  journey: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="about" class="journey-section">
    <div class="container journey-card elegant-card animate-fade-in">
      <!-- Botanical Illustration Flower Header (Referans Görsel Birebir Motif) -->
      <div class="flower-icon-wrapper">
        <svg class="flower-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.2">
          <!-- Flower Stem and Petals -->
          <path d="M50 90 L50 45" />
          <path d="M50 65 Q35 55 25 60 Q35 70 50 65" />
          <path d="M50 75 Q65 65 75 70 Q65 80 50 75" />
          <!-- Central Flower Petals -->
          <path d="M50 45 Q38 30 35 15 Q50 22 50 45" />
          <path d="M50 45 Q62 30 65 15 Q50 22 50 45" />
          <path d="M50 45 Q50 20 50 10 Q50 20 50 45" />
          <path d="M50 45 Q28 40 20 30 Q35 38 50 45" />
          <path d="M50 45 Q72 40 80 30 Q65 38 50 45" />
        </svg>
      </div>

      <!-- Main Section Header (Referans Görsel Tipografisi) -->
      <div class="journey-title-container">
        <h2 class="journey-main-title">{{ journey.titleMain }}</h2>
        <span class="journey-script-title">{{ journey.titleScript }}</span>
      </div>

      <!-- Quote -->
      <blockquote class="journey-quote">
        "{{ journey.quote }}"
      </blockquote>

      <!-- Story Paragraphs -->
      <div class="journey-content">
        <p class="journey-paragraph">
          {{ journey.paragraph1 }}
        </p>

        <p class="journey-paragraph">
          {{ journey.paragraph2 }}
        </p>
      </div>

      <!-- Bullet Points -->
      <div class="journey-bullets" v-if="journey.bulletPoints && journey.bulletPoints.length">
        <div v-for="(point, index) in journey.bulletPoints" :key="index" class="bullet-item">
          <div class="bullet-icon">
            <Check :size="14" />
          </div>
          <span>{{ point }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.journey-section {
  padding: 5rem 0;
  position: relative;
}

.journey-card {
  padding: 4.5rem 3rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border-color-gold);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

/* Botanical Flower SVG */
.flower-icon-wrapper {
  margin-bottom: 1.5rem;
  color: var(--accent-gold);
  display: flex;
  justify-content: center;
}

.flower-svg {
  width: 70px;
  height: 70px;
  opacity: 0.9;
}

/* Title Styling - Matching Reference Image */
.journey-title-container {
  margin-bottom: 2.2rem;
  position: relative;
}

.journey-main-title {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--text-primary);
  font-weight: 400;
  line-height: 1.1;
}

.journey-script-title {
  font-family: var(--font-script);
  font-size: 3.8rem;
  color: var(--accent-gold);
  display: block;
  margin-top: -1.2rem;
  font-weight: 400;
}

.journey-quote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.3rem;
  color: var(--accent-gold);
  max-width: 680px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.journey-content {
  max-width: 720px;
  margin: 0 auto 2.5rem;
}

.journey-paragraph {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 1.25rem;
  font-weight: 300;
}

.journey-bullets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding-top: 1.8rem;
  border-top: 1px solid var(--border-color);
}

.bullet-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.bullet-icon {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  background: rgba(232, 218, 191, 0.15);
  border: 1px solid var(--accent-gold);
  color: var(--accent-gold);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .journey-card {
    padding: 3rem 1.5rem;
  }
  .journey-main-title {
    font-size: 2.4rem;
    letter-spacing: 3px;
  }
  .journey-script-title {
    font-size: 2.8rem;
  }
}
</style>
