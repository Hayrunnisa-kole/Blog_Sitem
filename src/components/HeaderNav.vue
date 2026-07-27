<script setup>
import { ref } from 'vue'
import { Menu, X, Flower2 } from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    default: 'Sizin Adınız'
  }
})

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <!-- Monogram / Brand Logo -->
      <a href="#" class="brand">
        <Flower2 class="brand-flower" :size="22" />
        <span class="brand-text">{{ name }}</span>
      </a>

      <!-- Desktop Navigation (Sadece İstenen Sayfalar) -->
      <nav class="nav-links">
        <a href="#" class="nav-link active">Ana Sayfa</a>
        <a href="#about" class="nav-link">Hikayem</a>
        <a href="#projects" class="nav-link">Projelerim</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-toggle" aria-label="Menü">
        <X v-if="mobileMenuOpen" :size="24" />
        <Menu v-else :size="24" />
      </button>
    </div>

    <!-- Mobile Navigation Drawer -->
    <transition name="slide-down">
      <nav v-if="mobileMenuOpen" class="mobile-menu">
        <a href="#" @click="mobileMenuOpen = false" class="mobile-nav-link">Ana Sayfa</a>
        <a href="#about" @click="mobileMenuOpen = false" class="mobile-nav-link">Hikayem</a>
        <a href="#projects" @click="mobileMenuOpen = false" class="mobile-nav-link">Projelerim</a>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(52, 67, 53, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-color);
  padding: 1.2rem 0;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.brand-flower {
  color: var(--accent-gold);
}

.brand-text {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  letter-spacing: 1px;
  color: var(--text-primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.nav-link:hover, .nav-link.active {
  color: var(--accent-gold);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  background: var(--bg-secondary);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.mobile-nav-link {
  padding: 0.75rem 0;
  color: var(--text-secondary);
  font-family: var(--font-heading);
  text-transform: uppercase;
  border-bottom: 1px solid rgba(244, 237, 226, 0.08);
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .mobile-toggle {
    display: block;
  }
}
</style>
