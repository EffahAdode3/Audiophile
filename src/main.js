import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

// Import pages
import Home from './pages/Home.vue'
import CategoryPage from './pages/CategoryPage.vue'
import ProductDetail from './pages/ProductDetail.vue'
import Cart from './pages/Cart.vue'
import Checkout from './pages/Checkout.vue'
import Confirmation from './pages/Confirmation.vue'

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/category/:category', component: CategoryPage },
    { path: '/product/:slug', component: ProductDetail },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/confirmation', component: Confirmation },
    { 
      path: '/:pathMatch(.*)*', 
      redirect: '/' 
    }
  ]
})

// Create and mount app
const app = createApp(App)
app.use(router)
app.mount('#app') 