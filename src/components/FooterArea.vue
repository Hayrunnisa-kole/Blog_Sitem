<script setup>
import { Flower2, Heart } from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    default: 'Sizin Adınız'
  }
})
</script>

<template>
  <footer class="footer">
    <div class="container footer-content text-center">
      <div class="footer-icon">
        <Flower2 :size="28" />
      </div>

      <h3 class="footer-title">{{ name }}</h3>
      <p class="footer-subtitle">Kişisel Portfolyo & Web Alanı</p>

      <div class="footer-nav">
        <a href="#">Ana Sayfa</a>
        <a href="#about">Hikayem</a>
        <a href="#projects">Projelerim</a>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 {{ name }}. Tüm hakları saklıdır.</p>
        <p class="love-tag">
          Özenle & Sevgiyle Tasarlandı <Heart :size="12" class="heart-icon" />
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 2rem;
}

.text-center {
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-icon {
  color: var(--accent-gold);
  margin-bottom: 0.75rem;
}

.footer-title {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  letter-spacing: 2px;
  color: var(--text-primary);
}

.footer-subtitle {
  font-family: var(--font-script);
  font-size: 1.8rem;
  color: var(--accent-gold);
  margin-bottom: 2rem;
}

.footer-nav {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-nav a {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.footer-nav a:hover {
  color: var(--accent-gold);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.love-tag {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.heart-icon {
  color: var(--accent-rose);
}

@media (max-width: 600px) {
  .footer-bottom {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
