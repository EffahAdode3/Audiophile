<template>
  <div class="category-page">
    <div class="container">
      <div class="category-header">
        <h1>{{ categoryTitle }}</h1>
      </div>
      
      <div class="products-grid">
        <div 
          v-for="product in categoryProducts" 
          :key="product.slug"
          class="product-card"
          @click="navigateToProduct(product.slug)"
        >
          <div class="product-image">
            <img :src="getProductImage(product.slug)" :alt="product.name">
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="description">{{ product.description }}</p>
            <button class="btn-primary">See Product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import productsData from '../data/products.json'
import { productImages } from '../utils/imageUtils'

export default {
  name: 'CategoryPage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const products = ref(productsData)

    const category = computed(() => route.params.category)
    
    const categoryTitle = computed(() => {
      const categoryMap = {
        'headphones': 'Headphones',
        'speakers': 'Speakers',
        'earphones': 'Earphones'
      }
      return categoryMap[category.value] || category.value
    })

    const categoryProducts = computed(() => {
      return products.value.filter(product => 
        product.category === category.value
      )
    })

    const getProductImage = (slug) => {
      // Use the productImages mapping if available
      if (productImages[slug] && productImages[slug].category) {
        return productImages[slug].category
      }
      
      // Fallback to the original approach
      console.warn(`No image found for slug: ${slug}`)
      return `/assets/shared/desktop/image-${slug}.jpg`
    }

    const navigateToProduct = (slug) => {
      router.push(`/product/${slug}`)
    }

    onMounted(() => {
      // Scroll to top when component mounts
      window.scrollTo(0, 0)
    })

    return {
      categoryTitle,
      categoryProducts,
      getProductImage,
      navigateToProduct
    }
  }
}
</script>

<style scoped>
.category-page {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.category-header {
  text-align: center;
  margin-bottom: 4rem;
  background: #f1f1f1;
  padding: 4rem 2rem;
  border-radius: 8px;
}

.category-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
}

.products-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

.product-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  background: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-2px);
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.description {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
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
  .product-card {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .category-header h1 {
    font-size: 2rem;
  }
}
</style> 