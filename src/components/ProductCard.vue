<template>
  <div class="product-card" @click="navigateToProduct">
    <div class="product-image">
      <img :src="getProductImage(product.slug)" :alt="product.name">
    </div>
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="description">{{ product.description }}</p>
      <button class="btn-primary">See Product</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { productImages } from '../utils/imageUtils'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()

    const getProductImage = (slug) => {
      // Use the productImages mapping if available
      if (productImages[slug] && productImages[slug].category) {
        return productImages[slug].category
      }
      
      // Fallback to the original approach
      const productImagePath = `/assets/shared/desktop/image-${slug}.jpg`
      return productImagePath
    }

    const navigateToProduct = () => {
      router.push(`/product/${props.product.slug}`)
    }

    return {
      getProductImage,
      navigateToProduct
    }
  }
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-2px);
}

.product-image {
  margin-bottom: 2rem;
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
</style> 