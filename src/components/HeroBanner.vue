<script setup>
import { Sparkles, ArrowRight, TrendingUp, Users, Zap, BookOpen } from 'lucide-vue-next'
</script>

<template>
  <section class="hero-section">
    <div class="container hero-grid">
      <!-- Left Content -->
      <div class="hero-text animate-fade-in">
        <div class="hero-badge">
          <Sparkles :size="16" class="badge-icon" />
          <span>Vue 3 Composition API & Vite Destekli</span>
        </div>

        <h1 class="hero-title">
          Yazılım ve Teknolojide <br />
          <span class="gradient-text">Yeni Nesil Dönüşüm</span>
        </h1>

        <p class="hero-description">
          Web geliştirme, frontend mimarisi, yapay zeka entegrasyonları ve modern UI/UX trendlerine dair derinlemesine rehberler ve uzman yazıları.
        </p>

        <div class="hero-actions">
          <a href="#blog-grid" class="btn btn-primary">
            Makaleleri Keşfet
            <ArrowRight :size="18" />
          </a>
          <a href="#newsletter" class="btn btn-secondary">
            Bültene Katıl
          </a>
        </div>

        <!-- Metric Badges -->
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-icon-bg">
              <BookOpen :size="18" />
            </div>
            <div>
              <div class="stat-value">120+</div>
              <div class="stat-label">Teknik Makale</div>
            </div>
          </div>

          <div class="stat-divider"></div>

          <div class="stat-item">
            <div class="stat-icon-bg">
              <Users :size="18" />
            </div>
            <div>
              <div class="stat-value">25K+</div>
              <div class="stat-label">Aylık Okuyucu</div>
            </div>
          </div>

          <div class="stat-divider"></div>

          <div class="stat-item">
            <div class="stat-icon-bg">
              <Zap :size="18" />
            </div>
            <div>
              <div class="stat-value">99.8%</div>
              <div class="stat-label">Lighthouse Skoru</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Spotlight Card -->
      <div class="hero-card-container">
        <div class="glass-card spotlight-card">
          <div class="spotlight-badge badge badge-coral">
            <TrendingUp :size="14" />
            Haftanın Öne Çıkanı
          </div>
          <div class="spotlight-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80" 
              alt="Vue 3 ve Modern Web Mimarisi" 
              class="spotlight-img"
            />
          </div>
          <div class="spotlight-content">
            <span class="spotlight-meta">Vue 3 • 7 dk okuma</span>
            <h3 class="spotlight-title">Vite ve Vue 3 İle Ekstra Hızlı Web Uygulamaları Geliştirme</h3>
            <p class="spotlight-desc">Vue 3 Script Setup ve Composition API'nin sağladığı performans avantajları ve modern mimari yaklaşımları.</p>
            <div class="author-info">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Yazar Avatar" class="author-avatar" />
              <div>
                <span class="author-name">Zeynep Yılmaz</span>
                <span class="author-role">Senior Frontend Architect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 4rem 0 3rem;
  position: relative;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3.5rem;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.25);
  color: var(--accent-primary);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.badge-icon {
  color: var(--accent-primary);
}

.hero-title {
  font-size: 3.2rem;
  letter-spacing: -1px;
  margin-bottom: 1.2rem;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 580px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.stat-icon-bg {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
}

.stat-value {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.15rem;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: var(--border-color);
}

/* Spotlight Card */
.hero-card-container {
  position: relative;
}

.spotlight-card {
  padding: 1.25rem;
  position: relative;
  overflow: hidden;
}

.spotlight-badge {
  position: absolute;
  top: 1.75rem;
  left: 1.75rem;
  z-index: 2;
}

.spotlight-image-wrapper {
  width: 100%;
  height: 220px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 1.2rem;
}

.spotlight-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.spotlight-card:hover .spotlight-img {
  transform: scale(1.05);
}

.spotlight-meta {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
}

.spotlight-title {
  font-size: 1.3rem;
  margin: 0.4rem 0 0.6rem;
}

.spotlight-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  object-fit: cover;
}

.author-name {
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
}

.author-role {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
}

@media (max-width: 992px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .hero-title {
    font-size: 2.4rem;
  }
}
</style>
