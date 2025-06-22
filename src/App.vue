<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
    <Toast 
      :show="toast.show" 
      :title="toast.title" 
      :message="toast.message" 
      :type="toast.type"
      @close="hideToast"
    />
  </div>
</template>

<script>
import { reactive } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Toast from './components/Toast.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Toast
  },
  setup() {
    const toast = reactive({
      show: false,
      title: '',
      message: '',
      type: 'success'
    })

    const showToast = (title, message, type = 'success') => {
      toast.title = title
      toast.message = message
      toast.type = type
      toast.show = true
    }

    const hideToast = () => {
      toast.show = false
    }

    // Make toast available globally
    window.showToast = showToast

    return {
      toast,
      showToast,
      hideToast
    }
  }
}
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style> 