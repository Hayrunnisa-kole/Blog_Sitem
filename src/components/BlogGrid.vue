<script setup>
import { ref, computed } from 'vue'
import BlogPostCard from './BlogPostCard.vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const activeCategory = ref('Tümü')

const categories = ['Tümü', 'Yaşam', 'Tasarım', 'İlham']

const filteredPosts = computed(() => {
  if (activeCategory.value === 'Tümü') return props.posts
  return props.posts.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <section id="blog" class="blog-section">
    <div class="container">
      <div class="section-header text-center">
        <span class="script-text">Düşünceler & Günce</span>
        <h2 class="serif-title">SON YAZILAR</h2>
        <div class="gold-line"></div>
      </div>

      <!-- Category Filter Tabs -->
      <div class="category-tabs">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="tab-btn"
          :class="{ active: activeCategory === cat }"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid Cards -->
      <div class="posts-grid">
        <BlogPostCard
          v-for="post in filteredPosts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-section {
  padding: 5rem 0;
}

.text-center {
  text-align: center;
}

.section-header {
  margin-bottom: 3rem;
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

.category-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 0.5rem 1.4rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--text-secondary);
  font-family: var(--font-heading);
  font-size: 0.88rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.tab-btn:hover {
  color: var(--accent-gold);
  border-color: var(--border-color-gold);
}

.tab-btn.active {
  background: var(--accent-gold);
  color: var(--bg-secondary);
  border-color: var(--accent-gold);
  font-weight: 600;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 992px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
