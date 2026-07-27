<script setup>
import { ExternalLink } from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open-detail'])
</script>

<template>
  <article class="elegant-card project-card animate-fade-in" @click="$emit('open-detail', project)">
    <div class="card-image-wrapper">
      <img :src="project.coverImage" :alt="project.title" class="card-img" loading="lazy" />
      <span class="card-category">{{ project.category }}</span>
    </div>

    <div class="card-content">
      <div class="card-meta">
        <span class="meta-date">{{ project.date }}</span>
      </div>

      <h3 class="card-title">{{ project.title }}</h3>

      <p class="card-description">
        {{ project.shortDescription }}
      </p>

      <div class="tags-row" v-if="project.tags">
        <span v-for="tag in project.tags" :key="tag" class="tag-pill">{{ tag }}</span>
      </div>

      <div class="card-footer">
        <button class="btn btn-outline card-btn">
          <span>Detayları İncele</span>
          <ExternalLink :size="14" />
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 230px;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .card-img {
  transform: scale(1.06);
}

.card-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  background: rgba(52, 67, 53, 0.88);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-color-gold);
  color: var(--accent-gold);
  font-family: var(--font-heading);
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-meta {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.card-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  line-height: 1.35;
  margin-bottom: 0.75rem;
  font-weight: 500;
  color: var(--text-primary);
}

.project-card:hover .card-title {
  color: var(--accent-gold);
}

.card-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}

.tag-pill {
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-sm);
  background: rgba(244, 237, 226, 0.08);
  color: var(--text-secondary);
  font-size: 0.75rem;
}

.card-footer {
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  margin-top: auto;
}

.card-btn {
  width: 100%;
  padding: 0.55rem;
  font-size: 0.82rem;
}
</style>
