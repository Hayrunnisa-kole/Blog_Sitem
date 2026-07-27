<script setup>
import { ref } from 'vue'
import { Heart, Clock, Calendar, ArrowRight } from 'lucide-vue-next'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const isLiked = ref(false)
const likeCount = ref(props.post.likes || 0)

const toggleLike = () => {
  isLiked.value = !isLiked.value
  likeCount.value += isLiked.value ? 1 : -1
}
</script>

<template>
  <article class="elegant-card blog-card animate-fade-in">
    <div class="card-image-wrapper">
      <img :src="post.coverImage" :alt="post.title" class="card-img" loading="lazy" />
      <span class="card-category">{{ post.category }}</span>
    </div>

    <div class="card-content">
      <div class="card-meta">
        <span class="meta-item">
          <Calendar :size="13" />
          {{ post.date }}
        </span>
        <span class="meta-dot">•</span>
        <span class="meta-item">
          <Clock :size="13" />
          {{ post.readTime }}
        </span>
      </div>

      <h3 class="card-title">
        <a href="#">{{ post.title }}</a>
      </h3>

      <p class="card-excerpt">
        {{ post.excerpt }}
      </p>

      <div class="card-footer">
        <button @click="toggleLike" class="like-btn" :class="{ liked: isLiked }">
          <Heart :size="15" :class="{ fill: isLiked }" />
          <span>{{ likeCount }}</span>
        </button>

        <a href="#" class="read-link">
          <span>Devamını Oku</span>
          <ArrowRight :size="14" />
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.blog-card:hover .card-img {
  transform: scale(1.05);
}

.card-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-full);
  background: rgba(52, 67, 53, 0.85);
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.card-title {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  line-height: 1.35;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.card-title a:hover {
  color: var(--accent-gold);
}

.card-excerpt {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  margin-top: auto;
}

.like-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  border-radius: var(--radius-full);
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.like-btn:hover, .like-btn.liked {
  color: var(--accent-rose);
  border-color: rgba(216, 164, 153, 0.4);
}

.like-btn .fill {
  fill: var(--accent-rose);
}

.read-link {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: var(--accent-gold);
  letter-spacing: 0.5px;
}

.read-link:hover {
  color: var(--accent-gold-bright);
  transform: translateX(3px);
}
</style>
