<template>
  <div class="product-detail">
    <div class="container">
      <!-- Loading state -->
      <div v-if="loading" class="loading">
        <div class="loading-spinner"></div>
        <p>Loading product...</p>
      </div>
      
      <!-- Error state -->
      <div v-else-if="error" class="error">
        <h2>Product Not Found</h2>
        <p>{{ error }}</p>
        <button class="btn-primary" @click="goBack">Go Back</button>
      </div>
      
      <!-- Product content -->
      <div v-else-if="product">
        <button class="back-button" @click="goBack">Go Back</button>
        
        <div class="product-main">
          <div class="product-image">
            <img 
              :src="getImage(product.image.desktop)" 
              :alt="product.name"
              @error="handleImageError"
              @load="handleImageLoad"
            >
          </div>
          
          <div class="product-info">
            <span class="new-product" v-if="product.new">New Product</span>
            <h1>{{ product.name }}</h1>
            <p class="description">{{ product.description }}</p>
            <div class="price">${{ product.price.toLocaleString() }}</div>
            
            <div class="add-to-cart">
              <div class="quantity-controls">
                <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
                <span>{{ quantity }}</span>
                <button @click="increaseQuantity">+</button>
              </div>
              <button class="btn-primary" @click="addToCart">Add to Cart</button>
            </div>
          </div>
        </div>
        
        <div class="product-features">
          <div class="features">
            <h2>Features</h2>
            <p>{{ product.features }}</p>
          </div>
          
          <div class="in-the-box">
            <h2>In the Box</h2>
            <ul>
              <li v-for="item in product.includes" :key="item.item">
                <span class="quantity">{{ item.quantity }}x</span>
                <span class="item">{{ item.item }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="product-gallery">
          <div class="gallery-main">
            <img 
              :src="getImage(product.gallery.first.desktop)" 
              :alt="product.name"
              @error="handleImageError"
            >
          </div>
          <div class="gallery-side">
            <img 
              :src="getImage(product.gallery.second.desktop)" 
              :alt="product.name"
              @error="handleImageError"
            >
            <img 
              :src="getImage(product.gallery.third.desktop)" 
              :alt="product.name"
              @error="handleImageError"
            >
          </div>
        </div>
        
        <div class="related-products">
          <h2>You may also like</h2>
          <div class="related-grid">
            <div 
              v-for="related in relatedProducts" 
              :key="related.slug"
              class="related-card"
              @click="navigateToProduct(related.slug)"
            >
              <img 
                :src="getImage(related.image.desktop)" 
                :alt="related.name"
                @error="handleImageError"
              >
              <h3>{{ related.name }}</h3>
              <button class="btn-primary">See Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '../store/cartStore'
import productsData from '../data/products.json'
import { getImage } from '../utils/imageImports'

export default {
  name: 'ProductDetail',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const cartStore = useCartStore()
    const products = ref(productsData)
    const quantity = ref(1)
    const loading = ref(true)
    const error = ref(null)

    const product = computed(() => {
      const foundProduct = products.value.find(p => p.slug === route.params.slug)
      console.log('=== Product Detail Debug ===')
      console.log('Route params:', route.params)
      console.log('Looking for product with slug:', route.params.slug)
      console.log('Available products:', products.value.map(p => ({ slug: p.slug, name: p.name })))
      console.log('Found product:', foundProduct)
      console.log('===========================')
      return foundProduct
    })

    const relatedProducts = computed(() => {
      if (!product.value) return []
      return products.value
        .filter(p => p.category === product.value.category && p.slug !== product.value.slug)
        .slice(0, 3)
    })

    const loadProduct = () => {
      loading.value = true
      error.value = null
      
      // Simulate a small delay to show loading state
      setTimeout(() => {
        if (!product.value) {
          error.value = `Product with slug "${route.params.slug}" was not found.`
        }
        loading.value = false
      }, 100)
    }

    // Watch for route changes
    watch(() => route.params.slug, () => {
      loadProduct()
    }, { immediate: true })

    const increaseQuantity = () => {
      quantity.value++
    }

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--
      }
    }

    const addToCart = () => {
      if (product.value) {
        cartStore.addItem(product.value, quantity.value)
        console.log('Added to cart:', product.value.name, quantity.value)
        
        // Show success notification
        if (window.showToast) {
          window.showToast(
            'Added to Cart!',
            `${product.value.name} (${quantity.value} ${quantity.value === 1 ? 'item' : 'items'}) has been added to your cart.`,
            'success'
          )
        }
        
        // Reset quantity to 1 after adding to cart
        quantity.value = 1
      }
    }

    const goBack = () => {
      router.go(-1)
    }

    const navigateToProduct = (slug) => {
      router.push(`/product/${slug}`)
    }

    const handleImageError = () => {
      console.error('Image error')
    }

    const handleImageLoad = () => {
      console.log('Image loaded')
    }

    onMounted(() => {
      window.scrollTo(0, 0)
      loadProduct()
    })

    return {
      product,
      relatedProducts,
      quantity,
      loading,
      error,
      getImage,
      increaseQuantity,
      decreaseQuantity,
      addToCart,
      goBack,
      navigateToProduct,
      handleImageError,
      handleImageLoad
    }
  }
}
</script>

<style scoped>
.product-detail {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.loading {
  text-align: center;
  padding: 4rem 0;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #d87d4a;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  text-align: center;
  padding: 4rem 0;
}

.error h2 {
  color: #d87d4a;
  margin-bottom: 1rem;
}

.error p {
  color: #666;
  margin-bottom: 2rem;
}

.back-button {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  margin-bottom: 2rem;
  font-size: 0.875rem;
}

.back-button:hover {
  color: #d87d4a;
}

.product-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  align-items: center;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.new-product {
  color: #d87d4a;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  display: block;
}

.product-info h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.add-to-cart {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.quantity-controls {
  display: flex;
  align-items: center;
  background: #f1f1f1;
  padding: 0.5rem;
  border-radius: 4px;
}

.quantity-controls button {
  background: none;
  border: none;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
}

.quantity-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-controls span {
  width: 2rem;
  text-align: center;
  font-weight: 600;
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

.product-features {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.features h2,
.in-the-box h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.features p {
  color: #666;
  line-height: 1.6;
}

.in-the-box ul {
  list-style: none;
  padding: 0;
}

.in-the-box li {
  display: flex;
  margin-bottom: 0.5rem;
}

.quantity {
  color: #d87d4a;
  font-weight: 600;
  margin-right: 1rem;
}

.product-gallery {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-bottom: 4rem;
}

.gallery-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.gallery-side {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.gallery-side img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.related-products h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.related-card {
  text-align: center;
  cursor: pointer;
}

.related-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.related-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .product-main {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .product-features {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .product-gallery {
    grid-template-columns: 1fr;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
  
  .product-info h1 {
    font-size: 2rem;
  }
}
</style> 