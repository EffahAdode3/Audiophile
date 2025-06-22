<template>
  <div class="cart-page">
    <div class="container">
      <div class="cart-header">
        <h1 class="cart-title">SHOPPING CART ({{ items.length }})</h1>
        <button v-if="items.length > 0" @click="clearCart" class="remove-all-button">
          Remove all
        </button>
      </div>

      <div v-if="items.length === 0" class="empty-cart">
        <p class="empty-cart-text">Your cart is empty</p>
        <router-link to="/" class="continue-shopping-button">
          Continue Shopping
        </router-link>
      </div>

      <div v-else class="cart-content">
        <div class="cart-items">
          <CartItem 
            v-for="item in items" 
            :key="item.id" 
            :item="item"
            @update-quantity="updateQuantity"
            @remove-item="removeItem"
          />
        </div>
        
        <div class="cart-summary">
          <div class="total-row">
            <span class="total-label">TOTAL</span>
            <span class="total-amount">$ {{ total.toLocaleString() }}</span>
          </div>
          
          <router-link to="/checkout" class="checkout-button">
            CHECKOUT
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../store/cartStore'
import CartItem from '../components/CartItem.vue'

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  setup() {
    const cartStore = useCartStore()
    
    return {
      cartStore
    }
  },
  computed: {
    items() {
      return this.cartStore.items.value
    },
    total() {
      return this.cartStore.total.value
    }
  },
  methods: {
    clearCart() {
      this.cartStore.clearCart()
      if (window.showToast) {
        window.showToast(
          'Cart Cleared',
          'All items have been removed from your cart.',
          'success'
        )
      }
    },
    updateQuantity(itemId, quantity) {
      this.cartStore.updateQuantity(itemId, quantity)
      if (window.showToast) {
        const item = this.cartStore.items.value.find(item => item.id === itemId)
        if (item) {
          window.showToast(
            'Quantity Updated',
            `${item.name} quantity updated to ${quantity}.`,
            'success'
          )
        }
      }
    },
    removeItem(itemId) {
      const item = this.cartStore.items.value.find(item => item.id === itemId)
      this.cartStore.removeItem(itemId)
      if (window.showToast && item) {
        window.showToast(
          'Item Removed',
          `${item.name} has been removed from your cart.`,
          'success'
        )
      }
    }
  }
}
</script>

<style scoped>
.cart-page {
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.cart-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.remove-all-button {
  background: none;
  border: none;
  color: #dc2626;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.2s;
}

.remove-all-button:hover {
  color: #b91c1c;
}

.empty-cart {
  text-align: center;
  padding: 3rem 0;
}

.empty-cart-text {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

.continue-shopping-button {
  display: inline-block;
  background-color: #f97316;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
}

.continue-shopping-button:hover {
  background-color: #ea580c;
}

.cart-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-summary {
  border-top: 2px solid #e5e7eb;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.total-label {
  font-size: 1.125rem;
}

.total-amount {
  font-size: 1.125rem;
  font-weight: bold;
}

.checkout-button {
  display: block;
  width: 100%;
  background-color: #f97316;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
}

.checkout-button:hover {
  background-color: #ea580c;
}
</style> 