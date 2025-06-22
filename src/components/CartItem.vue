<template>
  <div class="cart-item">
    <img :src="getProductImage(item.slug)" :alt="item.name" class="item-image" />
    
    <div class="item-details">
      <h3 class="item-name">{{ item.name }}</h3>
      <p class="item-price">$ {{ item.price.toLocaleString() }}</p>
    </div>

    <div class="quantity-controls">
      <button @click="decreaseQuantity" class="quantity-btn">-</button>
      <input 
        v-model.number="localQuantity" 
        @change="updateQuantity"
        type="number" 
        min="1" 
        max="10" 
        class="quantity-input"
      />
      <button @click="increaseQuantity" class="quantity-btn">+</button>
    </div>

    <button @click="removeItem" class="remove-button" aria-label="Remove item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</template>

<script>
import { productImages } from '../utils/imageUtils'

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localQuantity: this.item.quantity
    }
  },
  watch: {
    'item.quantity'(newQuantity) {
      this.localQuantity = newQuantity
    }
  },
  methods: {
    getProductImage(slug) {
      // Use the productImages mapping if available
      if (productImages[slug] && productImages[slug].product) {
        return productImages[slug].product
      }
      
      // Fallback to the original approach
      console.warn(`No image found for slug: ${slug}`)
      return `/assets/shared/desktop/image-${slug}.jpg`
    },
    updateQuantity() {
      const quantity = parseInt(this.localQuantity, 10)
      if (!isNaN(quantity) && quantity > 0 && quantity <= 10) {
        this.$emit('update-quantity', this.item.id, quantity)
      } else {
        this.localQuantity = this.item.quantity
      }
    },
    increaseQuantity() {
      if (this.localQuantity < 10) {
        this.localQuantity++
        this.updateQuantity()
      }
    },
    decreaseQuantity() {
      if (this.localQuantity > 1) {
        this.localQuantity--
        this.updateQuantity()
      }
    },
    removeItem() {
      this.$emit('remove-item', this.item.id)
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: grid;
  grid-template-columns: 120px 1fr auto auto;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  align-items: center;
}

.item-image {
  width: 120px;
  height: 120px;
  border-radius: 0.375rem;
  object-fit: cover;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-name {
  font-size: 1.125rem;
  font-weight: bold;
  text-transform: uppercase;
}

.item-price {
  color: #4b5563;
  font-size: 1.125rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 120px;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: background-color 0.2s;
}

.quantity-btn:hover {
  background-color: #f3f4f6;
}

.quantity-input {
  width: 60px;
  height: 32px;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  text-align: center;
  font-size: 0.875rem;
}

.quantity-input:focus {
  outline: none;
  border-color: #f97316;
}

.remove-button {
  background: none;
  border: none;
  color: #dc2626;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.remove-button:hover {
  background-color: #fef2f2;
}

@media (max-width: 768px) {
  .cart-item {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .item-image {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
  
  .quantity-controls {
    justify-content: center;
  }
}
</style> 