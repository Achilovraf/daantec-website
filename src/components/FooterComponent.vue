<template>
  <footer class="bg-theme-dark text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <img src="/logo.png" alt="DAANTEC" class="h-12 w-auto">
          </div>
          <p class="text-gray-300 mb-6">
            Фармацевтическая компания, обеспечивающая рынок качественными препаратами международного уровня.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/daantec" target="_blank" class="w-10 h-10 bg-theme-blue rounded-lg flex items-center justify-center hover:bg-opacity-80 transition">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/daantec_uz" target="_blank" class="w-10 h-10 bg-theme-red rounded-lg flex items-center justify-center hover:bg-opacity-80 transition">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/daantec" target="_blank" class="w-10 h-10 bg-theme-blue rounded-lg flex items-center justify-center hover:bg-opacity-80 transition">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://t.me/daantec_uz" target="_blank" class="w-10 h-10 bg-theme-blue rounded-lg flex items-center justify-center hover:bg-opacity-80 transition">
              <i class="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-bold mb-6">Быстрые ссылки</h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-gray-300 hover:text-white transition">
                Главная
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-white transition">
                О компании
              </router-link>
            </li>
            <li>
              <router-link to="/products" class="text-gray-300 hover:text-white transition">
                Продукция
              </router-link>
            </li>
            <li>
              <router-link to="/partners" class="text-gray-300 hover:text-white transition">
                Партнерам
              </router-link>
            </li>
            <li>
              <router-link to="/blog" class="text-gray-300 hover:text-white transition">
                Блог
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Products -->
        <div>
          <h4 class="text-xl font-bold mb-6">Наша продукция</h4>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition">
                Кардиологический портфель
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition">
                Неврологический портфель
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition">
                Реанимационный портфель
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition">
                Весь ассортимент
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-xl font-bold mb-6">Контакты</h4>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <i class="fas fa-map-marker-alt text-theme-red mt-1"></i>
              <span class="text-gray-300">100005, Узбекистан, г. Ташкент,<br>Сергелийский район, Ханабад 46 В</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-phone-alt text-theme-red"></i>
              <a href="tel:+998950522552" class="text-gray-300 hover:text-white transition">
                +998 (95) 052-25-52
              </a>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-envelope text-theme-red"></i>
              <a href="mailto:daantec.uz@gmail.com" class="text-gray-300 hover:text-white transition">
                daantec.uz@gmail.com
              </a>
            </li>
            <li class="flex items-start space-x-3">
              <i class="fas fa-clock text-theme-red mt-1"></i>
              <span class="text-gray-300">
                Пн-Пт: 9:00 - 18:00<br>Сб-Вс: Выходной
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          © 2025 Daantec. Все права защищены.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white text-sm transition">
            Политика конфиденциальности
          </a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition">
            Условия использования
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
