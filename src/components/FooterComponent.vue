<template>
  <footer class="bg-theme-dark text-white pt-12 pb-6">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <img src="/logo.png" alt="DAANTEC" class="h-20 w-auto">
          </div>
          <p class="text-gray-300 text-xs lg:text-sm mb-4 leading-relaxed">
            {{ $t('footer.companyDesc') }}
          </p>
          <div class="flex space-x-3">
            <a href="https://www.facebook.com/daantec" target="_blank" class="w-8 h-8 bg-theme-blue rounded-lg flex items-center justify-center hover:bg-opacity-80 transition text-sm">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/daantec_uz" target="_blank" class="w-8 h-8 bg-theme-red rounded-lg flex items-center justify-center hover:bg-opacity-80 transition text-sm">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/daantec" target="_blank" class="w-8 h-8 bg-theme-blue rounded-lg flex items-center justify-center hover:bg-opacity-80 transition text-sm">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://t.me/daantec_uz" target="_blank" class="w-8 h-8 bg-theme-blue rounded-lg flex items-center justify-center hover:bg-opacity-80 transition text-sm">
              <i class="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-base lg:text-lg font-bold mb-4">{{ $t('footer.quickLinks') }}</h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                {{ $t('nav.home') }}
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                {{ $t('nav.about') }}
              </router-link>
            </li>
            <li>
              <router-link to="/products" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                {{ $t('nav.products') }}
              </router-link>
            </li>
            <li>
              <router-link to="/partners" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                {{ $t('nav.partners') }}
              </router-link>
            </li>
            <li>
              <router-link to="/blog" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                {{ $t('nav.blog') }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Products -->
        <div>
          <h4 class="text-base lg:text-lg font-bold mb-4">{{ $t('footer.productsTitle') }}</h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/products" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                {{ $t('footer.productCardiology') }}
              </router-link>
            </li>
            <li>
              <router-link to="/products" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                {{ $t('footer.productNeurology') }}
              </router-link>
            </li>
            <li>
              <router-link to="/products" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                {{ $t('footer.productResuscitation') }}
              </router-link>
            </li>
            <li>
              <router-link to="/products" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                {{ $t('footer.productAll') }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-base lg:text-lg font-bold mb-4">{{ $t('footer.contactsTitle') }}</h4>
          <ul class="space-y-3">
            <li class="flex items-start space-x-2">
              <i class="fas fa-map-marker-alt text-theme-red mt-0.5 text-xs"></i>
              <span class="text-gray-300 text-xs lg:text-sm leading-relaxed">{{ $t('footer.address') }}</span>
            </li>
            <li class="flex items-center space-x-2">
              <i class="fas fa-phone-alt text-theme-red text-xs"></i>
              <a href="tel:+998950522552" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                +998 (95) 052-25-52
              </a>
            </li>
            <li class="flex items-center space-x-2">
              <i class="fas fa-envelope text-theme-red text-xs"></i>
              <a href="mailto:daantec.uz@gmail.com" class="text-gray-300 hover:text-white transition text-xs lg:text-sm">
                daantec.uz@gmail.com
              </a>
            </li>
            <li class="flex items-start space-x-2">
              <i class="fas fa-clock text-theme-red mt-0.5 text-xs"></i>
              <span class="text-gray-300 text-xs lg:text-sm leading-relaxed">
                {{ $t('footer.schedule') }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-xs mb-3 md:mb-0">
          © 2025 DAANTEC. {{ $t('footer.rights') }}
        </p>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-white text-xs transition">
            {{ $t('footer.privacy') }}
          </a>
          <a href="#" class="text-gray-400 hover:text-white text-xs transition">
            {{ $t('footer.terms') }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>