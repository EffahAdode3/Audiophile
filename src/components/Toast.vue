<template>
  <Transition name="toast">
    <div v-if="show" class="toast" :class="type">
      <div class="toast-content">
        <div class="toast-icon">
          <svg v-if="type === 'success'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
        <div class="toast-message">
          <h4 class="toast-title">{{ title }}</h4>
          <p class="toast-text">{{ message }}</p>
        </div>
        <button @click="close" class="toast-close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'success',
      validator: (value) => ['success', 'error', 'info'].includes(value)
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  emits: ['close'],
  watch: {
    show(newVal) {
      if (newVal && this.duration > 0) {
        setTimeout(() => {
          this.close()
        }, this.duration)
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  max-width: 400px;
  min-width: 300px;
}

.toast-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: white;
  border-left: 4px solid;
}

.toast.success {
  border-left-color: #10b981;
}

.toast.error {
  border-left-color: #ef4444;
}

.toast.info {
  border-left-color: #3b82f6;
}

.toast-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.toast.success .toast-icon {
  color: #10b981;
}

.toast.error .toast-icon {
  color: #ef4444;
}

.toast.info .toast-icon {
  color: #3b82f6;
}

.toast-message {
  flex: 1;
  min-width: 0;
}

.toast-title {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
}

.toast-text {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.4;
}

.toast-close {
  flex-shrink: 0;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
}

.toast-close:hover {
  background-color: #f3f4f6;
  color: #6b7280;
}

/* Transition animations */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

@media (max-width: 768px) {
  .toast {
    top: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
    min-width: auto;
  }
}
</style> 