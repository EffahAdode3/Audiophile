<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h2 class="footer-logo">Audiophile</h2>
          <p class="footer-description">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team
            of music lovers and sound specialists who are devoted to helping you get the
            most out of personal audio.
          </p>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">Shop</h3>
          <router-link to="/category/headphones" class="footer-link">Headphones</router-link>
          <router-link to="/category/speakers" class="footer-link">Speakers</router-link>
          <router-link to="/category/earphones" class="footer-link">Earphones</router-link>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">Support</h3>
          <a href="#" class="footer-link">Contact Us</a>
          <a href="#" class="footer-link">Shipping</a>
          <a href="#" class="footer-link">Returns</a>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">Company</h3>
          <a href="#" class="footer-link">About Us</a>
          <a href="#" class="footer-link">Careers</a>
          <a href="#" class="footer-link">Privacy Policy</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} Audiophile. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #111827;
  color: #e5e7eb;
  padding: 2.5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.footer-description {
  font-size: 0.875rem;
  color: #9ca3af;
  line-height: 1.5;
}

.footer-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.footer-link {
  display: block;
  color: #e5e7eb;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #f97316;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
}

.copyright {
  font-size: 0.875rem;
  color: #9ca3af;
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
  }
}
</style> 