<template>
  <div id="app">
    <HeaderComponent />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterComponent />
    
    <!-- Floating WhatsApp Button -->
    <a 
      href="https://wa.me/998950522552" 
      target="_blank"
      class="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50"
    >
      <i class="fab fa-whatsapp text-3xl"></i>
    </a>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
