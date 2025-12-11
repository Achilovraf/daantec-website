<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3">
          <img src="/logo.png" alt="DAANTEC" class="h-12">
          <div>
            <div class="text-xl font-bold text-theme-blue">DAANTEC</div>
            <div class="text-xs text-gray-600">Caring for life</div>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.to"
            :to="link.to" 
            class="text-gray-700 hover:text-theme-blue transition font-medium"
            active-class="text-theme-blue"
          >
            {{ $t(link.label) }}
          </router-link>
        </nav>

        <!-- Language Switcher + Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Language Switcher -->
          <div class="relative">
            <button 
              @click="showLangMenu = !showLangMenu"
              class="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-theme-blue transition"
            >
              <i class="fas fa-globe text-theme-blue"></i>
              <span class="font-semibold text-sm uppercase">{{ currentLocale }}</span>
              <i class="fas fa-chevron-down text-xs"></i>
            </button>

            <!-- Language Dropdown -->
            <div 
              v-show="showLangMenu"
              class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
            >
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLanguage(lang.code)"
                class="w-full px-4 py-2 text-left hover:bg-theme-light transition flex items-center space-x-3"
                :class="{ 'bg-theme-light text-theme-blue': currentLocale === lang.code }"
              >
                <span class="text-2xl">{{ lang.flag }}</span>
                <span class="font-medium">{{ lang.name }}</span>
              </button>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden text-gray-700 hover:text-theme-blue transition"
          >
            <i class="fas text-2xl" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="mobileMenuOpen"
        class="lg:hidden py-4 border-t border-gray-200"
      >
        <nav class="flex flex-col space-y-3">
          <router-link 
            v-for="link in navLinks" 
            :key="link.to"
            :to="link.to" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 hover:text-theme-blue transition font-medium px-4 py-2 rounded-lg hover:bg-theme-light"
            active-class="text-theme-blue bg-theme-light"
          >
            {{ $t(link.label) }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      mobileMenuOpen: false,
      showLangMenu: false,
      navLinks: [
        { to: '/', label: 'nav.home' },
        { to: '/about', label: 'nav.about' },
        { to: '/products', label: 'nav.products' },
        { to: '/partners', label: 'nav.partners' },
        { to: '/services', label: 'nav.services' },
        { to: '/blog', label: 'nav.blog' },
        { to: '/contact', label: 'nav.contact' }
      ],
      languages: [
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
        { code: 'en', name: 'English', flag: '🇬🇧' }
      ]
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale
    }
  },
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('language', locale)
      this.showLangMenu = false
    }
  },
  mounted() {
    // Закрытие меню языков при клике вне
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.relative')) {
        this.showLangMenu = false
      }
    })
  }
}
</script>