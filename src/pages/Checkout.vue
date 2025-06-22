<template>
  <div class="checkout-page">
    <div class="container">
      <div class="checkout-grid">
        <!-- Checkout Form -->
        <div class="checkout-form">
          <h1 class="checkout-title">CHECKOUT</h1>
          
          <form @submit.prevent="handleSubmit">
            <!-- Billing Details -->
            <div class="form-section">
              <h2 class="section-title">BILLING DETAILS</h2>
              <div class="form-grid">
                <div class="form-group" :class="{ 'error': errors.name }">
                  <label for="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    @blur="validateField('name')"
                    placeholder="Alexei Ward"
                    required
                  >
                  <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                </div>

                <div class="form-group" :class="{ 'error': errors.email }">
                  <label for="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    @blur="validateField('email')"
                    placeholder="alexei@example.com"
                    required
                  >
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>

                <div class="form-group" :class="{ 'error': errors.phone }">
                  <label for="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone" 
                    @blur="validateField('phone')"
                    placeholder="+1 202-555-0136"
                    required
                  >
                  <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
                </div>
              </div>
            </div>
            
            <!-- Shipping Info -->
            <div class="form-section">
              <h2 class="section-title">SHIPPING INFO</h2>
              <div class="form-group" :class="{ 'error': errors.address }">
                <label for="address">Address</label>
                <input 
                  type="text" 
                  id="address" 
                  v-model="form.address" 
                  @blur="validateField('address')"
                  placeholder="1137 Williams Avenue"
                  required
                >
                <span v-if="errors.address" class="error-message">{{ errors.address }}</span>
              </div>

              <div class="form-grid">
                <div class="form-group" :class="{ 'error': errors.city }">
                  <label for="city">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    v-model="form.city" 
                    @blur="validateField('city')"
                    placeholder="New York"
                    required
                  >
                  <span v-if="errors.city" class="error-message">{{ errors.city }}</span>
                </div>

                <div class="form-group" :class="{ 'error': errors.state }">
                  <label for="state">State</label>
                  <input 
                    type="text" 
                    id="state" 
                    v-model="form.state" 
                    @blur="validateField('state')"
                    placeholder="New York"
                    required
                  >
                  <span v-if="errors.state" class="error-message">{{ errors.state }}</span>
                </div>

                <div class="form-group" :class="{ 'error': errors.zipCode }">
                  <label for="zipCode">ZIP Code</label>
                  <input 
                    type="text" 
                    id="zipCode" 
                    v-model="form.zipCode" 
                    @blur="validateField('zipCode')"
                    placeholder="10001"
                    required
                  >
                  <span v-if="errors.zipCode" class="error-message">{{ errors.zipCode }}</span>
                </div>

                <div class="form-group" :class="{ 'error': errors.country }">
                  <label for="country">Country</label>
                  <input 
                    type="text" 
                    id="country" 
                    v-model="form.country" 
                    @blur="validateField('country')"
                    placeholder="United States"
                    required
                  >
                  <span v-if="errors.country" class="error-message">{{ errors.country }}</span>
                </div>
              </div>
            </div>
            
            <!-- Payment Details -->
            <div class="form-section">
              <h2 class="section-title">PAYMENT DETAILS</h2>
              <div class="form-group" :class="{ 'error': errors.paymentMethod }">
                <label>Payment Method</label>
                <div class="radio-group">
                  <label class="radio-option" :class="{ 'selected': form.paymentMethod === 'e-money' }">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="e-money" 
                      v-model="form.paymentMethod"
                      @change="validateField('paymentMethod')"
                      required
                    >
                    <span class="radio-custom"></span>
                    e-Money
                  </label>
                  <label class="radio-option" :class="{ 'selected': form.paymentMethod === 'cash' }">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="cash" 
                      v-model="form.paymentMethod"
                      @change="validateField('paymentMethod')"
                      required
                    >
                    <span class="radio-custom"></span>
                    Cash on Delivery
                  </label>
                </div>
                <span v-if="errors.paymentMethod" class="error-message">{{ errors.paymentMethod }}</span>
              </div>
              
              <div v-if="form.paymentMethod === 'e-money'" class="form-grid">
                <div class="form-group" :class="{ 'error': errors.eMoneyNumber }">
                  <label for="eMoneyNumber">e-Money Number</label>
                  <input 
                    type="text" 
                    id="eMoneyNumber" 
                    v-model="form.eMoneyNumber" 
                    @blur="validateField('eMoneyNumber')"
                    placeholder="238521993"
                    required
                  >
                  <span v-if="errors.eMoneyNumber" class="error-message">{{ errors.eMoneyNumber }}</span>
                </div>

                <div class="form-group" :class="{ 'error': errors.eMoneyPin }">
                  <label for="eMoneyPin">e-Money PIN</label>
                  <input 
                    type="password" 
                    id="eMoneyPin" 
                    v-model="form.eMoneyPin" 
                    @blur="validateField('eMoneyPin')"
                    placeholder="6891"
                    required
                  >
                  <span v-if="errors.eMoneyPin" class="error-message">{{ errors.eMoneyPin }}</span>
                </div>
              </div>
            </div>
          </form>
        </div>
        
        <!-- Summary -->
        <div class="order-summary">
          <h2 class="summary-title">SUMMARY</h2>
          <div class="summary-content">
            <div class="cart-items">
              <div 
                v-for="item in cartItems" 
                :key="item?.id || Math.random()"
                class="cart-item"
                v-if="item && typeof item.price === 'number' && item.price > 0"
              >
                <div class="item-image">
                  <img :src="getProductImage(item.slug || '')" :alt="item.name || 'Product'">
                </div>
                <div class="item-details">
                  <h3 class="item-name">{{ item.name || 'Product' }}</h3>
                  <p class="item-price">$ {{ (item.price || 0).toLocaleString() }}</p>
                </div>
                <div class="item-quantity">
                  x{{ item.quantity || 1 }}
                </div>
              </div>
            </div>
            
            <div class="summary-totals">
              <div class="total-row">
                <span>SUBTOTAL</span>
                <span>$ {{ subtotal.toLocaleString() }}</span>
              </div>
              <div class="total-row">
                <span>SHIPPING</span>
                <span>$ {{ shipping.toLocaleString() }}</span>
              </div>
              <div class="total-row">
                <span>VAT (20%)</span>
                <span>$ {{ vat.toLocaleString() }}</span>
              </div>
              <div class="total-row grand-total">
                <span>TOTAL</span>
                <span>$ {{ total.toLocaleString() }}</span>
              </div>
            </div>
            
            <button 
              class="checkout-btn" 
              @click="handleSubmit"
              :disabled="!isFormValid || isSubmitting"
            >
              {{ isSubmitting ? 'PROCESSING...' : 'CONTINUE & PAY' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Confirmation Modal -->
    <div v-if="showConfirmationModal" class="modal-overlay" @click="closeConfirmationModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <img src="/src/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmation" class="confirmation-icon">
          <h2>THANK YOU FOR YOUR ORDER</h2>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        
        <div class="order-details">
          <div class="order-summary-modal">
            <h3>ORDER SUMMARY</h3>
            <div class="order-items">
              <div 
                v-for="item in (orderDetails.items || [])" 
                :key="item?.id || Math.random()"
                class="order-item"
                v-if="item && typeof item.price === 'number'"
              >
                <div class="item-info">
                  <img :src="getProductImage(item.slug || '')" :alt="item.name || 'Product'" class="item-thumbnail">
                  <div class="item-text">
                    <h4>{{ item.name || 'Product' }}</h4>
                    <p>$ {{ (item.price || 0).toLocaleString() }}</p>
                  </div>
                </div>
                <div class="item-quantity">
                  x{{ item.quantity || 1 }}
                </div>
              </div>
              <div v-if="(orderDetails.items || []).length > 1" class="other-items">
                <p>and {{ (orderDetails.items || []).length - 1 }} other item(s)</p>
              </div>
            </div>
            
            <div class="order-totals">
              <div class="total-row">
                <span>SUBTOTAL</span>
                <span>$ {{ orderDetails.subtotal.toLocaleString() }}</span>
              </div>
              <div class="total-row">
                <span>SHIPPING</span>
                <span>$ {{ orderDetails.shipping.toLocaleString() }}</span>
              </div>
              <div class="total-row">
                <span>VAT (20%)</span>
                <span>$ {{ orderDetails.vat.toLocaleString() }}</span>
              </div>
              <div class="total-row grand-total">
                <span>TOTAL</span>
                <span>$ {{ orderDetails.total.toLocaleString() }}</span>
              </div>
            </div>
          </div>
          
          <div class="shipping-info">
            <h3>SHIPPING ADDRESS</h3>
            <p>{{ orderDetails.name }}</p>
            <p>{{ orderDetails.address }}</p>
            <p>{{ orderDetails.city }}, {{ orderDetails.state }} {{ orderDetails.zipCode }}</p>
            <p>{{ orderDetails.country }}</p>
          </div>
          
          <div class="payment-info">
            <h3>PAYMENT METHOD</h3>
            <p v-if="orderDetails.paymentMethod === 'e-money' && orderDetails.eMoneyNumber">
              e-Money ending in {{ (orderDetails.eMoneyNumber || '').slice(-4) }}
            </p>
            <p v-else>Cash on Delivery</p>
          </div>
        </div>
        
        <button class="back-home-btn" @click="goHome">
          BACK TO HOME
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cartStore'

export default {
  name: 'Checkout',
  setup() {
    const router = useRouter()
    const cartStore = useCartStore()
    
    const form = ref({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      paymentMethod: 'e-money',
      eMoneyNumber: '',
      eMoneyPin: ''
    })
    
    const errors = ref({})
    const isSubmitting = ref(false)
    const showConfirmationModal = ref(false)
    const orderDetails = ref({})
    
    // Use actual cart items from store
    const cartItems = computed(() => {
      const items = cartStore.items.value
      return Array.isArray(items) ? items : []
    })
    
    // Calculate totals
    const subtotal = computed(() => {
      if (!Array.isArray(cartItems.value)) {
        return 0
      }
      return cartItems.value.reduce((sum, item) => {
        if (item && typeof item.price === 'number' && typeof item.quantity === 'number') {
          return sum + (item.price * item.quantity)
        }
        return sum
      }, 0)
    })
    
    const shipping = computed(() => 50) // Fixed shipping cost of $50
    
    const vat = computed(() => subtotal.value * 0.2) // VAT at 20% of product total
    
    const total = computed(() => subtotal.value + shipping.value + vat.value)
    
    const isFormValid = computed(() => {
      const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'country', 'paymentMethod']
      const hasRequiredFields = requiredFields.every(field => form.value[field])
      
      const hasEMoneyFields = form.value.paymentMethod !== 'e-money' || 
                             (form.value.eMoneyNumber && form.value.eMoneyPin)
      
      return hasRequiredFields && hasEMoneyFields && cartItems.value.length > 0 && Object.keys(errors.value).length === 0
    })
    
    const getProductImage = (slug) => {
      return `/src/assets/shared/desktop/image-${slug}.jpg`
    }
    
    const validateField = (fieldName) => {
      const value = form.value[fieldName]
      
      switch (fieldName) {
        case 'name':
          if (!value) {
            errors.value.name = 'Name is required'
          } else if (value.length < 2) {
            errors.value.name = 'Name must be at least 2 characters'
          } else {
            delete errors.value.name
          }
          break
          
        case 'email':
          if (!value) {
            errors.value.email = 'Email is required'
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errors.value.email = 'Please enter a valid email'
          } else {
            delete errors.value.email
          }
          break
          
        case 'phone':
          if (!value) {
            errors.value.phone = 'Phone number is required'
          } else {
            delete errors.value.phone
          }
          break
          
        case 'address':
          if (!value) {
            errors.value.address = 'Address is required'
          } else {
            delete errors.value.address
          }
          break
          
        case 'city':
          if (!value) {
            errors.value.city = 'City is required'
          } else {
            delete errors.value.city
          }
          break
          
        case 'state':
          if (!value) {
            errors.value.state = 'State is required'
          } else {
            delete errors.value.state
          }
          break
          
        case 'zipCode':
          if (!value) {
            errors.value.zipCode = 'ZIP code is required'
          } else {
            delete errors.value.zipCode
          }
          break
          
        case 'country':
          if (!value) {
            errors.value.country = 'Country is required'
          } else {
            delete errors.value.country
          }
          break
          
        case 'paymentMethod':
          if (!value) {
            errors.value.paymentMethod = 'Payment method is required'
          } else {
            delete errors.value.paymentMethod
          }
          break
          
        case 'eMoneyNumber':
          if (form.value.paymentMethod === 'e-money' && !value) {
            errors.value.eMoneyNumber = 'e-Money number is required'
          } else if (form.value.paymentMethod === 'e-money' && value && !/^\d{9}$/.test(value)) {
            errors.value.eMoneyNumber = 'e-Money number must be 9 digits'
          } else {
            delete errors.value.eMoneyNumber
          }
          break
          
        case 'eMoneyPin':
          if (form.value.paymentMethod === 'e-money' && !value) {
            errors.value.eMoneyPin = 'e-Money PIN is required'
          } else if (form.value.paymentMethod === 'e-money' && value && !/^\d{4}$/.test(value)) {
            errors.value.eMoneyPin = 'e-Money PIN must be 4 digits'
          } else {
            delete errors.value.eMoneyPin
          }
          break
      }
    }
    
    const validateAllFields = () => {
      const fieldsToValidate = ['name', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'country', 'paymentMethod']
      fieldsToValidate.forEach(field => validateField(field))
      
      if (form.value.paymentMethod === 'e-money') {
        validateField('eMoneyNumber')
        validateField('eMoneyPin')
      }
    }
    
    const handleSubmit = async () => {
      validateAllFields()
      
      if (!isFormValid.value) {
        return
      }
      
      isSubmitting.value = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Generate order number
      const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
      
      // Store order details
      orderDetails.value = {
        ...form.value,
        items: cartItems.value,
        subtotal: subtotal.value,
        shipping: shipping.value,
        vat: vat.value,
        total: total.value,
        orderNumber
      }
      
      // Store in localStorage for confirmation page
      localStorage.setItem('lastOrder', JSON.stringify(orderDetails.value))
      
      // Clear the cart
      cartStore.clearCart()
      
      // Show confirmation modal
      showConfirmationModal.value = true
      isSubmitting.value = false
    }
    
    const closeConfirmationModal = () => {
      showConfirmationModal.value = false
    }
    
    const goHome = () => {
      showConfirmationModal.value = false
      router.push('/')
    }
    
    // Redirect to home if cart is empty
    onMounted(() => {
      if (cartItems.value.length === 0) {
        router.push('/')
      }
    })
    
    return {
      form,
      errors,
      cartItems,
      subtotal,
      shipping,
      vat,
      total,
      isFormValid,
      isSubmitting,
      showConfirmationModal,
      orderDetails,
      getProductImage,
      validateField,
      handleSubmit,
      closeConfirmationModal,
      goHome
    }
  }
}
</script>

<style scoped>
.checkout-page {
  background: #f8f9fa;
  padding: 2rem 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.checkout-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .checkout-grid {
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
}

.checkout-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.checkout-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #d87d4a;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: border-color 0.2s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #d87d4a;
}

.form-group.error input {
  border-color: #e53e3e;
}

.error-message {
  color: #e53e3e;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  transition: border-color 0.2s ease;
}

.radio-option:hover,
.radio-option.selected {
  border-color: #d87d4a;
}

.radio-option input[type="radio"] {
  display: none;
}

.radio-custom {
  width: 1rem;
  height: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  position: relative;
  transition: border-color 0.2s ease;
}

.radio-option input[type="radio"]:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background: #d87d4a;
  border-radius: 50%;
}

.radio-option input[type="radio"]:checked ~ .radio-custom {
  border-color: #d87d4a;
}

.order-summary {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.summary-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
}

.item-image {
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.item-name {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
}

.item-price {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
}

.item-quantity {
  font-size: 0.875rem;
  font-weight: 600;
  color: #666;
}

.summary-totals {
  border-top: 1px solid #e2e8f0;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
}

.total-row.grand-total {
  font-size: 1.125rem;
  font-weight: 600;
  color: #d87d4a;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  margin-top: 0.5rem;
}

.checkout-btn {
  width: 100%;
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
  border-radius: 4px;
}

.checkout-btn:hover:not(:disabled) {
  background: #b66d3a;
}

.checkout-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 8px;
  max-width: 540px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
}

.modal-header {
  text-align: center;
  margin-bottom: 2rem;
}

.confirmation-icon {
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
}

.modal-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.modal-header p {
  color: #666;
  font-size: 0.875rem;
}

.order-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.order-summary-modal {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.order-summary-modal h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.item-thumbnail {
  width: 3rem;
  height: 3rem;
  border-radius: 4px;
  object-fit: cover;
}

.item-text h4 {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
}

.item-text p {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
}

.item-quantity {
  font-size: 0.875rem;
  font-weight: 600;
  color: #666;
}

.other-items {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.other-items p {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
}

.order-totals {
  border-top: 1px solid #e2e8f0;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.shipping-info,
.payment-info {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.shipping-info h3,
.payment-info h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.shipping-info p,
.payment-info p {
  font-size: 0.875rem;
  margin: 0.25rem 0;
  color: #666;
}

.back-home-btn {
  width: 100%;
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
  border-radius: 4px;
  margin-top: 2rem;
}

.back-home-btn:hover {
  background: #b66d3a;
}

@media (max-width: 768px) {
  .checkout-form,
  .order-summary {
    padding: 1.5rem;
  }
  
  .checkout-title {
    font-size: 1.5rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    padding: 1.5rem;
  }
}
</style>
