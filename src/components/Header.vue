<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          Audiophile
        </router-link>

        <nav class="nav-desktop">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/category/headphones" class="nav-link">Headphones</router-link>
          <router-link to="/category/speakers" class="nav-link">Speakers</router-link>
          <router-link to="/category/earphones" class="nav-link">Earphones</router-link>
        </nav>

        <div class="header-actions">
          <router-link to="/cart" class="cart-link">
            <div class="cart-icon">
              <img :src="cartIcon" alt="Cart" class="cart-icon-img">
              <span v-if="itemsCount > 0" class="cart-badge">{{ itemsCount }}</span>
            </div>
          </router-link>
          
          <div class="mobile-menu">
            <button @click="toggleMobileMenu" class="menu-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            
            <div v-if="showMobileMenu" class="mobile-menu-dropdown">
              <router-link to="/" class="mobile-menu-item" @click="closeMobileMenu">Home</router-link>
              <router-link to="/category/headphones" class="mobile-menu-item" @click="closeMobileMenu">Headphones</router-link>
              <router-link to="/category/speakers" class="mobile-menu-item" @click="closeMobileMenu">Speakers</router-link>
              <router-link to="/category/earphones" class="mobile-menu-item" @click="closeMobileMenu">Earphones</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useCartStore } from '../store/cartStore'
import cartIcon from '../assets/shared/desktop/icon-cart.svg'

export default {
  name: 'Header',
  components: {},
  setup() {
    const cartStore = useCartStore()
    
    return {
      cartStore,
      cartIcon
    }
  },
  data() {
    return {
      showMobileMenu: false
    }
  },
  computed: {
    itemsCount() {
      return this.cartStore.itemsCount.value
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    closeMobileMenu() {
      this.showMobileMenu = false
    }
  }
}
</script>

<style scoped>
.header {
  background-color: black;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: lowercase;
  color: white;
  text-decoration: none;
  transition: color 0.2s;
}

.logo:hover {
  color: #f97316;
}

.nav-desktop {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #f97316;
}

.header-actions {
  display: flex;
  align-items: center;
}

.cart-link {
  text-decoration: none;
  color: white;
}

.cart-icon {
  position: relative;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
}

.cart-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.cart-icon-img {
  width: 24px;
  height: 20px;
  display: block;
}

.cart-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: #f97316;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}

.mobile-menu {
  display: none;
  position: relative;
}

.menu-button {
  margin-left: 1rem;
  padding: 0.5rem;
  background: none;
  border: none;
  color: white;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.menu-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.mobile-menu-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: black;
  border: 1px solid #4b5563;
  border-radius: 0.375rem;
  min-width: 150px;
  z-index: 10;
}

.mobile-menu-item {
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  background-color: black;
  transition: background-color 0.2s, color 0.2s;
}

.mobile-menu-item:hover {
  background-color: #4b5563;
  color: #f97316;
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
  
  .mobile-menu {
    display: block;
  }
}
</style> 