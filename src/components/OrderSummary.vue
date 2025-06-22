<template>
  <div class="order-summary">
    <h2>Summary</h2>
    <div class="cart-items">
      <div 
        v-for="item in items" 
        :key="item.id"
        class="cart-item"
      >
        <img :src="getProductImage(item.slug)" :alt="item.name">
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p>${{ item.price.toLocaleString() }}</p>
        </div>
        <div class="item-quantity">
          x{{ item.quantity }}
        </div>
      </div>
    </div>
    
    <div class="summary-totals">
      <div class="total-row">
        <span>Total</span>
        <span>${{ total.toLocaleString() }}</span>
      </div>
      <div class="total-row">
        <span>Shipping</span>
        <span>${{ shipping.toLocaleString() }}</span>
      </div>
      <div class="total-row">
        <span>VAT (included)</span>
        <span>${{ vat.toLocaleString() }}</span>
      </div>
      <div class="total-row grand-total">
        <span>Grand Total</span>
        <span>${{ grandTotal.toLocaleString() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'OrderSummary',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const getProductImage = (slug) => {
      return `/src/assets/shared/desktop/image-${slug}.jpg`
    }

    const total = computed(() => {
      return props.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    })

    const shipping = computed(() => 50)

    const vat = computed(() => Math.round(total.value * 0.2))

    const grandTotal = computed(() => total.value + shipping.value)

    return {
      getProductImage,
      total,
      shipping,
      vat,
      grandTotal
    }
  }
}
</script>

<style scoped>
.order-summary {
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
}

.order-summary h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cart-items {
  margin-bottom: 2rem;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.cart-item img {
  width: 4rem;
  height: 4rem;
  border-radius: 4px;
}

.item-details h3 {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.item-details p {
  font-size: 0.875rem;
  color: #666;
}

.item-quantity {
  margin-left: auto;
  font-size: 0.875rem;
  font-weight: 600;
  color: #666;
}

.summary-totals {
  border-top: 1px solid #cfcfcf;
  padding-top: 1rem;
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.total-row.grand-total {
  font-size: 1.125rem;
  font-weight: 600;
  color: #d87d4a;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #cfcfcf;
}
</style> 