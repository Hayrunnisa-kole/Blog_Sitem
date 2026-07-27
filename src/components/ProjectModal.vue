<script setup>
import { X, ExternalLink, Github, Calendar, Tag } from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])
</script>

<template>
  <transition name="modal-fade">
    <div v-if="project" class="modal-backdrop" @click.self="$emit('close')">
      <div class="modal-card elegant-card">
        <!-- Close Button -->
        <button @click="$emit('close')" class="modal-close-btn" aria-label="Kapat">
          <X :size="20" />
        </button>

        <!-- Project Image Banner -->
        <div class="modal-image-wrapper">
          <img :src="project.coverImage" :alt="project.title" class="modal-img" />
          <span class="modal-category">{{ project.category }}</span>
        </div>

        <!-- Modal Body Content -->
        <div class="modal-body">
          <div class="modal-meta">
            <span class="meta-item">
              <Calendar :size="14" />
              {{ project.date }}
            </span>
          </div>

          <h2 class="modal-title">{{ project.title }}</h2>

          <p class="modal-description">
            {{ project.fullDescription || project.shortDescription }}
          </p>

          <!-- Tech Tags -->
          <div v-if="project.tags && project.tags.length" class="modal-tags">
            <h4 class="tags-title">
              <Tag :size="14" />
              Kullanılan Teknolojiler & Araçlar
            </h4>
            <div class="tags-list">
              <span v-for="tag in project.tags" :key="tag" class="modal-tag-pill">
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="modal-actions">
            <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="btn btn-primary">
              <span>Projeyi İncele / Canlı Demo</span>
              <ExternalLink :size="16" />
            </a>

            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="btn btn-outline">
              <span>Kaynak Kodlar (GitHub)</span>
              <Github :size="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(20, 27, 21, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-card {
  position: relative;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color-gold);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  padding: 0;
}

.modal-close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background: rgba(52, 67, 53, 0.85);
  border: 1px solid var(--border-color-gold);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.modal-close-btn:hover {
  background: var(--accent-gold);
  color: var(--bg-secondary);
}

.modal-image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
}

.modal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-category {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
  background: rgba(52, 67, 53, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-color-gold);
  color: var(--accent-gold);
  font-family: var(--font-heading);
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.modal-body {
  padding: 2rem;
}

.modal-meta {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.modal-title {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.modal-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-weight: 300;
}

.modal-tags {
  margin-bottom: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-color);
}

.tags-title {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  color: var(--accent-gold);
  letter-spacing: 0.5px;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.modal-tag-pill {
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 0.82rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Modal Transition */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
</style>
