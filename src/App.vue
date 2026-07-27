<script setup>
import { siteConfig } from './config/siteData.js'
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsGrid from './components/ProjectsGrid.vue'
import FooterArea from './components/FooterArea.vue'
</script>

<template>
  <div class="app-layout">
    <!-- Header Navigation -->
    <HeaderNav :name="siteConfig.personalInfo.name" />

    <!-- Main Content -->
    <main>
      <!-- Hero Greeting -->
      <HeroSection :info="siteConfig.personalInfo" />

      <!-- Story / Journey Section -->
      <AboutSection :journey="siteConfig.journeySection" />

      <!-- Projects Grid (Kart yapısı & Detay Penceresi) -->
      <ProjectsGrid :projects="siteConfig.projects" />
    </main>

    <!-- Footer -->
    <FooterArea :name="siteConfig.personalInfo.name" />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-primary);
}

main {
  flex: 1;
}
</style>
