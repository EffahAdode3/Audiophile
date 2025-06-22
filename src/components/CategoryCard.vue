<template>
  <router-link :to="link" class="category-card">
    <div class="category-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="category-content">
      <h3 class="category-title">{{ title }}</h3>
      <div class="category-button">
        SHOP
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.category-card {
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  overflow: visible;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: 75px;
  text-decoration: none;
  color: inherit;
  display: block;
}

.category-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.category-image {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category-image img {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.category-content {
  padding: 75px 1.5rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category-title {
  font-size: 1.125rem;
  font-weight: bold;
  text-transform: uppercase;
}

.category-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #f97316;
  font-weight: bold;
  transition: color 0.2s;
}

.category-card:hover .category-button {
  color: #ea580c;
}

@media (min-width: 640px) {
  .category-image {
    top: -60px;
    width: 140px;
    height: 140px;
  }
  
  .category-image img {
    width: 140px;
    height: 140px;
  }
  
  .category-title {
    font-size: 1.25rem;
  }
}

@media (min-width: 768px) {
  .category-image {
    top: -70px;
    width: 160px;
    height: 160px;
  }
  
  .category-image img {
    width: 160px;
    height: 160px;
  }
  
  .category-title {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .category-image {
    top: -80px;
    width: 180px;
    height: 180px;
  }
  
  .category-image img {
    width: 180px;
    height: 180px;
  }
}
</style> 