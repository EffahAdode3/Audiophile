<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-image desktop"></div>
        <div class="hero-image tablet"></div>
        <div class="hero-image mobile"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <p class="hero-subtitle">New Product</p>
          <h1 class="hero-title">XX99 Mark II Headphones</h1>
          <p class="hero-description">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <router-link to="/product/xx99-mark-two-headphones" class="hero-button">
            See Product
          </router-link>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories">
      <div class="container">
        <div class="categories-grid">
          <CategoryCard
            title="Headphones"
            :image="categoryHeadphones"
            link="/category/headphones"
          />
          <CategoryCard
            title="Speakers"
            :image="categorySpeakers"
            link="/category/speakers"
          />
          <CategoryCard
            title="Earphones"
            :image="categoryEarphones"
            link="/category/earphones"
          />
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-products">
      <div class="container">
        <div class="products-stack">
          <!-- ZX9 Speaker -->
          <div class="product-card zx9-speaker">
            <div class="product-content">
              <div class="product-image">
                <div class="pattern-circles"></div>
                <img :src="zx9SpeakerImg" alt="ZX9 Speaker" class="speaker-image" />
              </div>
              <div class="product-info">
                <h2 class="product-title">ZX9 Speaker</h2>
                <p class="product-description">
                  Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <router-link to="/product/zx9-speaker" class="product-button">
                  See Product
                </router-link>
              </div>
            </div>
          </div>

          <!-- ZX7 Speaker -->
          <div class="product-card zx7-speaker">
            <img :src="zx7SpeakerImg" alt="ZX7 Speaker" class="speaker-bg" />
            <div class="speaker-overlay">
              <h2 class="speaker-title">ZX7 SPEAKER</h2>
              <router-link to="/product/zx7-speaker" class="speaker-button">
                SEE PRODUCT
              </router-link>
            </div>
          </div>

          <!-- YX1 Earphones -->
          <div class="earphones-section">
            <div class="earphones-image">
              <img :src="yx1EarphonesImg" alt="YX1 Earphones" />
            </div>
            <div class="earphones-info">
              <h2 class="earphones-title">YX1 EARPHONES</h2>
              <router-link to="/product/yx1-earphones" class="earphones-button">
                SEE PRODUCT
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="about-title">YOU THE GEAR</h2>
            <p class="about-description">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of our highly knowledgeable team members who will help you with all your audio needs.
            </p>
          </div>
          <div class="about-image">
            <img :src="bestGearImg" alt="Best audio gear" />
          </div>
        </div>
      </div>
    </section>

    <!-- Debug Section - Remove in production -->
    
  </div>
</template>

<script>
import CategoryCard from '../components/CategoryCard.vue'
import productsData from '../data/products.json'

// Import images
import imageHeroDesktop from '../assets/home/desktop/image-hero.jpg'
import imageHeroTablet from '../assets/home/tablet/image-header.jpg'
import imageHeroMobile from '../assets/home/mobile/image-header.jpg'
import patternCircles from '../assets/home/desktop/pattern-circles.svg'
import zx9SpeakerImg from '../assets/home/desktop/image-speaker-zx9.png'
import zx7SpeakerImg from '../assets/home/desktop/image-speaker-zx7.jpg'
import yx1EarphonesImg from '../assets/home/desktop/image-earphones-yx1.jpg'
import bestGearImg from '../assets/shared/desktop/image-best-gear.jpg'
import categoryHeadphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import categorySpeakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import categoryEarphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png'

export default {
  name: 'Home',
  components: {
    CategoryCard
  },
  data() {
    return {
      imageHeroDesktop,
      imageHeroTablet,
      imageHeroMobile,
      patternCircles,
      zx9SpeakerImg,
      zx7SpeakerImg,
      yx1EarphonesImg,
      bestGearImg,
      categoryHeadphones,
      categorySpeakers,
      categoryEarphones,
      allProducts: productsData
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.hero {
  background-color: #191919;
  color: white;
  position: relative;
  height: 600px;
  margin-bottom: 4rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  background: linear-gradient(to right, #191919 10%, transparent 100%);
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero-image.desktop {
  display: none;
  background-image: url('../assets/home/desktop/image-hero.jpg');
  background-position: right center;
  background-size: contain;
}

.hero-image.tablet {
  display: none;
  background-image: url('../assets/home/tablet/image-header.jpg');
}

.hero-image.mobile {
  display: block;
  background-image: url('../assets/home/mobile/image-header.jpg');
}

.hero-content {
  max-width: 36rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
}

.hero-subtitle {
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
}

.hero-description {
  color: #9ca3af;
  font-size: 1.125rem;
  max-width: 28rem;
}

.hero-button {
  display: inline-block;
  background-color: #f97316;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  transition: background-color 0.2s;
}

.hero-button:hover {
  background-color: #ea580c;
}

/* Categories */
.categories {
  margin-bottom: 4rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Featured Products */
.featured-products {
  margin-bottom: 4rem;
}

.products-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.product-card {
  border-radius: 0.75rem;
  overflow: hidden;
}

.zx9-speaker {
  background-color: #f97316;
  padding: 4rem 2rem;
  position: relative;
}

.product-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.product-image {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
}

.pattern-circles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background-image: url('../assets/home/desktop/pattern-circles.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.speaker-image {
  width: 100%;
  max-width: 300px;
  position: relative;
  z-index: 1;
}

.product-info {
  flex: 1;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.product-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
}

.product-description {
  font-size: 1.125rem;
  max-width: 28rem;
}

.product-button {
  display: inline-block;
  background-color: black;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  align-self: center;
  transition: background-color 0.2s;
}

.product-button:hover {
  background-color: #374151;
}

.zx7-speaker {
  position: relative;
  height: 320px;
  border-radius: 0.75rem;
  overflow: hidden;
}

.speaker-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.speaker-overlay {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.speaker-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.speaker-button {
  display: inline-block;
  border: 2px solid black;
  background: transparent;
  color: black;
  padding: 1rem 2rem;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  transition: background-color 0.2s, color 0.2s;
}

.speaker-button:hover {
  background-color: black;
  color: white;
}

.earphones-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.earphones-image {
  border-radius: 0.75rem;
  overflow: hidden;
  height: 320px;
}

.earphones-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.earphones-info {
  background-color: #f3f4f6;
  border-radius: 0.75rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

.earphones-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.earphones-button {
  display: inline-block;
  border: 2px solid black;
  background: transparent;
  color: black;
  padding: 1rem 2rem;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  transition: background-color 0.2s, color 0.2s;
}

.earphones-button:hover {
  background-color: black;
  color: white;
}

/* About Section */
.about {
  padding: 5rem 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
}

.about-title {
  font-size: 2rem;
  font-weight: bold;
}

.about-description {
  color: #4b5563;
  font-size: 1.125rem;
  line-height: 1.6;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
}

/* Responsive Design */
@media (min-width: 768px) {
  .hero {
    height: 700px;
  }
  
  .hero-image.desktop {
    display: none;
  }
  
  .hero-image.tablet {
    display: block;
  }
  
  .hero-image.mobile {
    display: none;
  }
  
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  .product-content {
    flex-direction: row;
    text-align: left;
  }
  
  .product-info {
    text-align: left;
    align-items: flex-start;
  }
  
  .zx7-speaker {
    height: 400px;
  }
  
  .earphones-section {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .about-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero {
    height: 800px;
  }
  
  .hero-image.desktop {
    display: block;
  }
  
  .hero-image.tablet {
    display: none;
  }
  
  .hero-content {
    padding: 0 2rem;
  }
  
  .categories-grid {
    gap: 2rem;
  }
  
  .speaker-image {
    max-width: 450px;
  }
}
</style> 