<script setup>
import { Image } from 'lucide-vue-next'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <div class="section-header text-center">
        <span class="script-text">Anlar & Detaylar</span>
        <h2 class="serif-title">ESTETİK GALERİ</h2>
        <div class="gold-line"></div>
      </div>

      <div class="gallery-grid">
        <div 
          v-for="img in images" 
          :key="img.id" 
          class="gallery-item elegant-card"
        >
          <img :src="img.url" :alt="img.caption" class="gallery-img" />
          <div class="gallery-overlay">
            <span class="gallery-caption">{{ img.caption }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: 5rem 0;
  background: rgba(43, 56, 44, 0.4);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.text-center {
  text-align: center;
}

.section-header {
  margin-bottom: 3.5rem;
}

.serif-title {
  font-size: 2.5rem;
  letter-spacing: 4px;
  margin-top: 0.2rem;
}

.gold-line {
  width: 60px;
  height: 1px;
  background: var(--accent-gold);
  margin: 1rem auto 0;
  opacity: 0.6;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  height: 280px;
  overflow: hidden;
  border-radius: var(--radius-md);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-item:hover .gallery-img {
  transform: scale(1.08);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(43, 56, 44, 0.85), transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 1.25rem;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-caption {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--accent-gold);
  letter-spacing: 0.5px;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
