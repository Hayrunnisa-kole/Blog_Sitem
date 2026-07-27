<script setup>
import { ref } from 'vue'
import { Send, CheckCircle2, Instagram, Twitter, Linkedin, Mail, MapPin } from 'lucide-vue-next'

const props = defineProps({
  info: {
    type: Object,
    required: true
  },
  social: {
    type: Object,
    required: true
  }
})

const nameInput = ref('')
const emailInput = ref('')
const messageInput = ref('')
const isSubmitted = ref(false)

const handleSubmit = () => {
  if (nameInput.value && emailInput.value && messageInput.value) {
    isSubmitted.value = true
    nameInput.value = ''
    emailInput.value = ''
    messageInput.value = ''
    setTimeout(() => {
      isSubmitted.value = false
    }, 4000)
  }
}
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header text-center">
        <span class="script-text">Benimle İletişime Geçin</span>
        <h2 class="serif-title">BANA ULAŞIN</h2>
        <div class="gold-line"></div>
      </div>

      <div class="contact-grid">
        <!-- Left Info Column -->
        <div class="contact-info elegant-card">
          <h3 class="info-title">Birlikte Üretelim & Paylaşalım</h3>
          <p class="info-desc">
            Sorularınız, iş birliği teklifleriniz veya sadece merhaba demek için bana mesaj gönderebilirsiniz.
          </p>

          <div class="info-details">
            <div class="detail-item">
              <MapPin class="detail-icon" :size="18" />
              <span>{{ info.location }}</span>
            </div>
            <div class="detail-item">
              <Mail class="detail-icon" :size="18" />
              <span>{{ info.email }}</span>
            </div>
          </div>

          <div class="social-block">
            <h4 class="social-title">Beni Takip Edin</h4>
            <div class="social-icons">
              <a :href="social.instagram" target="_blank" class="social-link" title="Instagram"><Instagram :size="18" /></a>
              <a :href="social.pinterest" target="_blank" class="social-link" title="Pinterest"><Instagram :size="18" /></a>
              <a :href="social.twitter" target="_blank" class="social-link" title="Twitter"><Twitter :size="18" /></a>
              <a :href="social.linkedin" target="_blank" class="social-link" title="LinkedIn"><Linkedin :size="18" /></a>
            </div>
          </div>
        </div>

        <!-- Right Form Column -->
        <form @submit.prevent="handleSubmit" class="contact-form elegant-card">
          <div class="form-group">
            <label for="name">Adınız & Soyadınız</label>
            <input type="text" id="name" v-model="nameInput" required placeholder="Örn: Ayşe Yılmaz" class="form-input" />
          </div>

          <div class="form-group">
            <label for="email">E-posta Adresiniz</label>
            <input type="email" id="email" v-model="emailInput" required placeholder="ayse@example.com" class="form-input" />
          </div>

          <div class="form-group">
            <label for="message">Mesajınız</label>
            <textarea id="message" v-model="messageInput" rows="5" required placeholder="Mesajınızı buraya yazabilirsiniz..." class="form-input textarea"></textarea>
          </div>

          <button type="submit" class="btn btn-primary submit-btn">
            <span>Mesajı Gönder</span>
            <Send :size="16" />
          </button>

          <p v-if="isSubmitted" class="success-msg">
            <CheckCircle2 :size="16" />
            Mesajınız başarıyla iletildi! Teşekkür ederim.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 5rem 0;
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
  align-items: start;
}

.contact-info, .contact-form {
  padding: 2.5rem;
}

.info-title {
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  color: var(--accent-gold);
}

.info-desc {
  color: var(--text-secondary);
  font-size: 0.98rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 300;
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.detail-icon {
  color: var(--accent-gold);
}

.social-title {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.social-icons {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-color);
  background: var(--bg-tertiary);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
}

.social-link:hover {
  background: var(--accent-gold);
  color: var(--bg-secondary);
  border-color: var(--accent-gold);
  transform: translateY(-2px);
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 0.4rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  outline: none;
  transition: all var(--transition-normal);
}

.form-input:focus {
  border-color: var(--accent-gold);
}

.textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  margin-top: 0.5rem;
}

.success-msg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: var(--accent-gold);
  font-size: 0.9rem;
  margin-top: 1rem;
}

@media (max-width: 850px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
