<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const selectedProject = ref(null)

const openDetail = (project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header text-center">
        <span class="script-text">Çalışmalarım & Tasarımlarım</span>
        <h2 class="serif-title">PROJELERİM</h2>
        <div class="gold-line"></div>
      </div>

      <!-- Projects Cards Grid -->
      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @open-detail="openDetail"
        />
      </div>

      <!-- Project Modal Detail View -->
      <ProjectModal 
        :project="selectedProject" 
        @close="closeModal" 
      />
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 5rem 0 6rem;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
