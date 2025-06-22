<template>
  <div class="confirmation-page">
    <div class="container">
      <div class="confirmation-content">
        <div class="confirmation-icon">
          <img src="/src/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed">
        </div>
        
        <div class="confirmation-text">
          <h1>Thank you for your order</h1>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        
        <div class="order-details">
          <div class="order-summary">
            <h2>Order Summary</h2>
            <div class="cart-items">
              <div 
                v-if="orderItems.length > 0"
                class="cart-item"
              >
                <img :src="getImageUrl(orderItems[0].image.desktop)" :alt="orderItems[0].name">
                <div class="item-details">
                  <h3>{{ orderItems[0].name }}</h3>
                  <p>${{ orderItems[0].price.toLocaleString() }}</p>
                </div>
                <div class="item-quantity">
                  x{{ orderItems[0].quantity }}
                </div>
              </div>
              
              <div class="other-items" v-if="otherItemsCount > 0">
                <hr>
                <p>and {{ otherItemsCount }} other item(s)</p>
              </div>
            </div>
          </div>
          
          <div class="order-totals">
            <div class="total-row">
              <span>Subtotal</span>
              <span>${{ (grandTotal - 50).toLocaleString() }}</span>
            </div>
            <div class="total-row">
              <span>Shipping</span>
              <span>$50</span>
            </div>
            <div class="total-row">
              <span>VAT (included)</span>
              <span>${{ Math.round((grandTotal - 50) * 0.2).toLocaleString() }}</span>
            </div>
            <div class="total-row grand-total">
              <span>Grand Total</span>
              <span>${{ grandTotal.toLocaleString() }}</span>
            </div>
          </div>
        </div>
        
        <div class="shipping-info">
          <div class="shipping-address">
            <h3>Shipping Address</h3>
            <p>{{ shippingAddress.name }}</p>
            <p>{{ shippingAddress.address }}</p>
            <p>{{ shippingAddress.city }}, {{ shippingAddress.zip }}</p>
            <p>{{ shippingAddress.country }}</p>
          </div>
          
          <div class="payment-info">
            <h3>Payment Method</h3>
            <p>{{ paymentMethod }}</p>
          </div>
        </div>
        
        <button class="btn-primary" @click="navigateToHome">
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getImage } from '../utils/imageImports'

export default {
  name: 'Confirmation',
  setup() {
    const router = useRouter()
    
    // Get actual order data from localStorage
    const checkoutData = ref(null)
    const orderItems = ref([])
    const otherItemsCount = ref(0)
    const grandTotal = ref(0)
    const shippingAddress = ref({})
    const paymentMethod = ref('')
    
    const getImageUrl = (path) => {
      return getImage(path)
    }
    
    const navigateToHome = () => {
      router.push('/')
    }

    onMounted(() => {
      window.scrollTo(0, 0)
      
      // Retrieve checkout data from localStorage
      const storedData = localStorage.getItem('checkoutData')
      if (storedData) {
        try {
          const data = JSON.parse(storedData)
          checkoutData.value = data
          orderItems.value = data.cartItems || []
          grandTotal.value = data.grandTotal || 0
          
          // Set shipping address from form data
          if (data.form) {
            shippingAddress.value = {
              name: data.form.name,
              address: data.form.address,
              city: data.form.city,
              zip: data.form.zip,
              country: data.form.country
            }
            paymentMethod.value = data.form.paymentMethod
          }
          
          // Calculate other items count (items beyond the first one shown)
          if (orderItems.value.length > 1) {
            otherItemsCount.value = orderItems.value.length - 1
          }
          
          // Clear the stored data after retrieving it
          localStorage.removeItem('checkoutData')
        } catch (error) {
          console.error('Error parsing checkout data:', error)
          // Fallback to dummy data if there's an error
          orderItems.value = [
            {
              id: 1,
              name: 'XX99 Mark II Headphones',
              slug: 'xx99-mark-two-headphones',
              price: 2999,
              quantity: 1,
              image: { desktop: '/assets/shared/desktop/image-xx99-mark-two-headphones.jpg' }
            }
          ]
          grandTotal.value = 3049
          shippingAddress.value = {
            name: 'Alexei Ward',
            address: '1137 Williams Avenue',
            city: 'New York',
            zip: '10001',
            country: 'United States'
          }
          paymentMethod.value = 'e-Money'
        }
      } else {
        // Fallback to dummy data if no stored data
        orderItems.value = [
          {
            id: 1,
            name: 'XX99 Mark II Headphones',
            slug: 'xx99-mark-two-headphones',
            price: 2999,
            quantity: 1,
            image: { desktop: '/assets/shared/desktop/image-xx99-mark-two-headphones.jpg' }
          }
        ]
        grandTotal.value = 3049
        shippingAddress.value = {
          name: 'Alexei Ward',
          address: '1137 Williams Avenue',
          city: 'New York',
          zip: '10001',
          country: 'United States'
        }
        paymentMethod.value = 'e-Money'
      }
    })

    return {
      orderItems,
      otherItemsCount,
      grandTotal,
      shippingAddress,
      paymentMethod,
      getImageUrl,
      navigateToHome
    }
  }
}
</script>

<style scoped>
.confirmation-page {
  padding: 2rem 0;
  background: #f8f8f8;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.confirmation-content {
  background: white;
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
}

.confirmation-icon {
  margin-bottom: 2rem;
}

.confirmation-icon img {
  width: 4rem;
  height: 4rem;
}

.confirmation-text h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.confirmation-text p {
  color: #666;
  margin-bottom: 2rem;
}

.order-details {
  background: #f8f8f8;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: left;
}

.order-summary h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
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

.other-items {
  margin-top: 1rem;
}

.other-items hr {
  border: none;
  border-top: 1px solid #cfcfcf;
  margin: 1rem 0;
}

.other-items p {
  font-size: 0.875rem;
  color: #666;
  font-weight: 600;
}

.order-totals {
  border-top: 1px solid #cfcfcf;
  padding-top: 1rem;
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
  font-weight: 600;
  color: #d87d4a;
}

.shipping-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  text-align: left;
}

.shipping-address h3,
.payment-info h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.shipping-address p,
.payment-info p {
  color: #666;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.btn-primary {
  background: #d87d4a;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background: #b66d3a;
}

@media (max-width: 768px) {
  .confirmation-content {
    padding: 2rem 1rem;
  }
  
  .shipping-info {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .confirmation-text h1 {
    font-size: 1.5rem;
  }
}
</style> 