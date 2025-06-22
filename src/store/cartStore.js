import { reactive, computed, watch } from 'vue'

// Helper to load cart from localStorage
const loadCart = () => {
  try {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  } catch (e) {
    console.error("Could not load cart from localStorage", e)
    return []
  }
}

// Create a singleton cart store
let cartStoreInstance = null

// Create reactive cart state, initialized from localStorage
const cartState = reactive({
  items: loadCart()
})

// Watch for changes in cartState.items and save to localStorage
watch(() => cartState.items, (newItems) => {
  try {
    localStorage.setItem('cart', JSON.stringify(newItems));
  } catch (e) {
    console.error("Could not save cart to localStorage", e)
  }
}, { deep: true });


// Cart store functions
export const useCartStore = () => {
  // Return singleton instance if it exists
  if (cartStoreInstance) {
    return cartStoreInstance
  }

  // Computed properties
  const items = computed(() => {
    return cartState.items
  })
  
  const itemsCount = computed(() => {
    return cartState.items.reduce((total, item) => total + item.quantity, 0)
  })
  
  const total = computed(() => {
    return cartState.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  // Methods
  const addItem = (product, quantity = 1) => {
    const existingItem = cartState.items.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        slug: product.slug,
        quantity: quantity
      }
      cartState.items.push(newItem)
    }
  }

  const updateQuantity = (itemId, quantity) => {
    const item = cartState.items.find(item => item.id === itemId)
    if (item) {
      if (quantity <= 0) {
        removeItem(itemId)
      } else {
        item.quantity = quantity
      }
    }
  }

  const removeItem = (itemId) => {
    const index = cartState.items.findIndex(item => item.id === itemId)
    if (index > -1) {
      cartState.items.splice(index, 1)
    }
  }

  const clearCart = () => {
    cartState.items = []
  }

  // Debug function to check cart state
  const debugCart = () => {
    console.log('=== Cart Debug ===')
    console.log('cartState:', cartState)
    console.log('cartState.items:', cartState.items)
    console.log('items computed:', items.value)
    console.log('total computed:', total.value)
    console.log('==================')
  }

  // Create the store instance
  cartStoreInstance = {
    items,
    itemsCount,
    total,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    debugCart
  }

  return cartStoreInstance
} 