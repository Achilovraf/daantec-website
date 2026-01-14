<template>
  <div class="pt-20">
    <!-- Products Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Breadcrumb -->
        <div class="mb-12">
          <span
            class="text-xs font-semibold text-gray-500 uppercase tracking-widest"
            >{{ $t("products.badge") }}</span
          >
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Filters Sidebar -->
          <div class="lg:w-1/4">
            <div
              class="p-5 rounded-xl border border-theme-medium sticky top-24"
            >
              <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-5">
                {{ $t("products.filters") }}
              </h3>

              <!-- Category Filter -->
              <div class="mb-5">
                <h4 class="text-sm font-semibold text-heading-dark mb-3">
                  {{ $t("products.category") }}
                </h4>
                <div class="space-y-2">
                  <label
                    v-for="category in categories"
                    :key="category"
                    class="flex items-center space-x-2 cursor-pointer text-xs lg:text-sm"
                  >
                    <input
                      type="checkbox"
                      :value="category"
                      v-model="selectedCategories"
                      class="rounded text-theme-blue"
                    />
                    <span class="text-gray-600">{{
                      $t(`products.categories.${category}`)
                    }}</span>
                  </label>
                </div>
              </div>

              <!-- Manufacturer Filter -->
              <div class="mb-5">
                <h4 class="text-sm font-semibold text-heading-dark mb-3">
                  {{ $t("products.manufacturer") }}
                </h4>
                <div class="space-y-2">
                  <label
                    v-for="manufacturer in manufacturers"
                    :key="manufacturer"
                    class="flex items-center space-x-2 cursor-pointer text-xs lg:text-sm"
                  >
                    <input
                      type="checkbox"
                      :value="manufacturer"
                      v-model="selectedManufacturers"
                      class="rounded text-theme-blue"
                    />
                    <span class="text-gray-600">{{
                      $t(`products.manufacturers.${manufacturer}`)
                    }}</span>
                  </label>
                </div>
              </div>

              <button
                @click="resetFilters"
                class="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition text-xs lg:text-sm"
              >
                {{ $t("products.resetFilters") }}
              </button>
            </div>
          </div>

          <!-- Products Grid -->
          <div class="lg:w-3/4">
            <div class="flex justify-between items-center mb-6">
              <p class="text-xs lg:text-sm text-gray-600">
                {{ $t("products.found") }}: {{ filteredProducts.length }}
              </p>
              <select
                class="px-3 py-2 text-xs lg:text-sm rounded-lg border border-theme-medium focus:border-theme-blue outline-none"
              >
                <option>{{ $t("products.sortPopular") }}</option>
                <option>{{ $t("products.sortPriceAsc") }}</option>
                <option>{{ $t("products.sortPriceDesc") }}</option>
                <option>{{ $t("products.sortName") }}</option>
              </select>
            </div>

            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              <div
                v-for="product in filteredProducts"
                :key="product.id"
                class="card-hover bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div
                  class="h-40 bg-gradient-to-br flex items-center justify-center p-4"
                >
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="h-full object-contain"
                  />
                </div>
                <div class="p-5">
                  <div class="text-theme-blue text-xs font-semibold mb-2">
                    {{ $t(`products.categories.${product.category}`) }}
                  </div>
                  <h3
                    class="text-base lg:text-lg font-bold text-heading-dark mb-2"
                  >
                    {{ product.name }}
                  </h3>
                  <p class="text-gray-600 text-xs lg:text-sm mb-1">
                    {{ product.dosage }}
                  </p>
                  <p class="text-gray-500 text-xs mb-3">
                    {{ $t(`products.manufacturers.${product.manufacturer}`) }}
                  </p>
                  <button
                    @click="openInstruction(product)"
                    class="w-full bg-theme-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition text-xs lg:text-sm"
                  >
                    <i class="fas fa-file-pdf mr-2"></i
                    >{{ $t("products.request") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal for Request Instruction -->
    <div
      v-if="showRequestModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showRequestModal = false"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          @click="showRequestModal = false"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <i class="fas fa-times text-xl"></i>
        </button>

        <div class="text-center mb-6">
          <div
            class="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <i class="fas fa-file-pdf text-theme-blue text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-heading-dark mb-2">
            Инструкция недоступна
          </h3>
          <p class="text-gray-600 text-sm">{{ selectedProduct?.name }}</p>
        </div>

        <p class="text-gray-600 text-sm mb-6 text-center">
          Для получения подробной информации, пожалуйста, свяжитесь с нами
        </p>

        <div class="space-y-3">
          <a
            href="tel:+998951234567"
            class="flex items-center justify-center gap-3 w-full bg-theme-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
          >
            <i class="fas fa-phone"></i>
            <span class="text-sm font-semibold">Позвонить</span>
          </a>
          <router-link
            to="/contact"
            @click="showRequestModal = false"
            class="flex items-center justify-center gap-3 w-full border-2 border-theme-blue text-theme-blue px-6 py-3 rounded-lg hover:bg-theme-blue hover:text-white transition"
          >
            <i class="fas fa-envelope"></i>
            <span class="text-sm font-semibold">Написать нам</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsPage",
  data() {
    return {
      selectedCategories: [],
      selectedManufacturers: [],
      showRequestModal: false,
      selectedProduct: null,
      categories: [
        "cardiology",
        "neurology",
        "resuscitation",
        "antibiotics",
        "metabolism",
      ],
      manufacturers: ["china", "georgia", "uzbekistan"],
      products: [
        // Кардиология
        {
          id: 1,
          name: "ЭФЕС 5",
          category: "cardiology",
          manufacturer: "china",
          dosage: "Фруктоза дифосфат натрия",
          image: "products/Эфес-5.png",
          instruction: "instructions/Эфес17.pdf",
        },
        {
          id: 2,
          name: "ЛАЙФОН",
          category: "cardiology",
          manufacturer: "uzbekistan",
          dosage: "Креатин фосфат натрия 1.0 г №1",
          image: "products/Лайфон.png",
          instruction: "instructions/Лайфтон_печать.pdf",
        },

        // Неврология
        {
          id: 3,
          name: "ЛЕТОКАР",
          category: "neurology",
          manufacturer: "georgia",
          dosage: "4.2 г L-аргинина гидрохлорида, 100 мл",
          image: "products/letokar.png",
          instruction: "instructions/Летокар17.pdf",
        },
        {
          id: 4,
          name: "ВЕГАС",
          category: "neurology",
          manufacturer: "china",
          dosage: "Гемодериват крови телят 40.0 мг",
          image: "products/vegas.jpg",
          instruction: "instructions/Вегас17.pdf",
        },

        // Реанимация
        {
          id: 5,
          name: "СТОЛАКСОЛ",
          category: "resuscitation",
          manufacturer: "uzbekistan",
          dosage: "Электролиты, 100 мл / 200 мл",
          image: "products/столаскол.jpg",
          instruction: "instructions/Столаксол_Print.pdf",
        },
        {
          id: 6,
          name: "МЕГАСОЛ",
          category: "resuscitation",
          manufacturer: "georgia",
          dosage: "Глюкоза 50 мг/мл, 100 мл / 250 мл",
          image: "products/megasol.jpg",
          instruction: "instructions/Мегасол17.pdf",
        },
        {
          id: 7,
          name: "АМИНОМАГТ",
          category: "resuscitation",
          manufacturer: "china",
          dosage: "8% раствор L-аминокислот, 250 мл",
          image: "products/aminomagt.jpg",
          instruction: "instructions/Аминогамт17.pdf",
        },
        {
          id: 8,
          name: "ИНФУЗИОЛ-НED",
          category: "resuscitation",
          manufacturer: "uzbekistan",
          dosage: "5% раствор L-аминокислот, 100/250 мл",
          image: "products/infuziol.jpg",
          instruction: "instructions/Инфузиол17.pdf",
        },

        // Антибиотики
        {
          id: 9,
          name: "МАКРОЦЕФ",
          category: "antibiotics",
          manufacturer: "china",
          dosage: "Цефоперазон 1.0 г + сульбактам 1.0 г",
          image: "products/makrotsef.png",
          instruction: null,
        },
        {
          id: 10,
          name: "АВРОЛА",
          category: "antibiotics",
          manufacturer: "uzbekistan",
          dosage: "Левофлоксацин 500 мг, 100 мл",
          image: "products/avrola.jpg",
          instruction: "instructions/Аврола.pdf",
        },

        // Метаболизм
        {
          id: 11,
          name: "ДЕКАРИН",
          category: "metabolism",
          manufacturer: "georgia",
          dosage: "Аргинозал + Кокарбоксилаза",
          image: "products/dikarin.jpg",
          instruction: null,
        },
        {
          id: 12,
          name: "ПЕПТАЗОЛ",
          category: "metabolism",
          manufacturer: "china",
          dosage: "Пантопразол 45 мг",
          image: "products/peptazole.jpg",
          instruction: "instructions/Пептазол_Print.pdf",
        },
        {
          id: 13,
          name: "АОРТА",
          category: "metabolism",
          manufacturer: "uzbekistan",
          dosage: "Железа (III) гидроксид 100 мг",
          image: "products/aourta-hb.jpg",
          instruction: null,
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const matchesCategory =
          this.selectedCategories.length === 0 ||
          this.selectedCategories.includes(product.category);
        const matchesManufacturer =
          this.selectedManufacturers.length === 0 ||
          this.selectedManufacturers.includes(product.manufacturer);

        return matchesCategory && matchesManufacturer;
      });
    },
  },
  methods: {
    openInstruction(product) {
      if (product.instruction) {
        // Открываем PDF в новой вкладке
        window.open(product.instruction, "_blank");
      } else {
        // Показываем модальное окно для запроса инструкции
        this.selectedProduct = product;
        this.showRequestModal = true;
      }
    },

    resetFilters() {
      this.selectedCategories = [];
      this.selectedManufacturers = [];
    },
  },
};
</script>

<style scoped>
/* Анимация для модального окна */
.fixed {
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.bg-white.rounded-2xl {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
