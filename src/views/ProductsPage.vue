<template>
  <div class="pt-20">
    <!-- Products Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Breadcrumb -->
        <div class="mb-12">
          <span class="text-xs font-semibold text-gray-500 uppercase tracking-widest">{{ $t('products.badge') }}</span>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Filters Sidebar -->
          <div class="lg:w-1/4">
            <div class="bg-gradient-to-br from-theme-light to-white p-5 rounded-xl border border-theme-medium sticky top-24">
              <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-5">{{ $t('products.filters') }}</h3>
              
              <!-- Category Filter -->
              <div class="mb-5">
                <h4 class="text-sm font-semibold text-heading-dark mb-3">{{ $t('products.category') }}</h4>
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
                    >
                    <span class="text-gray-600">{{ $t(`products.categories.${category}`) }}</span>
                  </label>
                </div>
              </div>

              <!-- Manufacturer Filter -->
              <div class="mb-5">
                <h4 class="text-sm font-semibold text-heading-dark mb-3">{{ $t('products.manufacturer') }}</h4>
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
                    >
                    <span class="text-gray-600">{{ $t(`products.manufacturers.${manufacturer}`) }}</span>
                  </label>
                </div>
              </div>

              <button 
                @click="resetFilters" 
                class="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition text-xs lg:text-sm"
              >
                {{ $t('products.resetFilters') }}
              </button>
            </div>
          </div>

          <!-- Products Grid -->
          <div class="lg:w-3/4">
            <div class="flex justify-between items-center mb-6">
              <p class="text-xs lg:text-sm text-gray-600">{{ $t('products.found') }}: {{ filteredProducts.length }}</p>
              <select class="px-3 py-2 text-xs lg:text-sm rounded-lg border border-theme-medium focus:border-theme-blue outline-none">
                <option>{{ $t('products.sortPopular') }}</option>
                <option>{{ $t('products.sortPriceAsc') }}</option>
                <option>{{ $t('products.sortPriceDesc') }}</option>
                <option>{{ $t('products.sortName') }}</option>
              </select>
            </div>

            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              <div 
                v-for="product in filteredProducts" 
                :key="product.id" 
                class="card-hover bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div class="h-40 bg-gradient-to-br from-theme-light to-white flex items-center justify-center p-4">
                  <img :src="product.image" :alt="product.name" class="h-full object-contain">
                </div>
                <div class="p-5">
                  <div class="text-theme-blue text-xs font-semibold mb-2">{{ $t(`products.categories.${product.category}`) }}</div>
                  <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-2">{{ product.name }}</h3>
                  <p class="text-gray-600 text-xs lg:text-sm mb-1">{{ product.dosage }}</p>
                  <p class="text-gray-500 text-xs mb-3">{{ $t(`products.manufacturers.${product.manufacturer}`) }}</p>
                  <button class="w-full bg-theme-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition text-xs lg:text-sm">
                    <i class="fas fa-file-medical mr-2"></i>{{ $t('products.request') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductsPage',
  data() {
    return {
      selectedCategories: [],
      selectedManufacturers: [],
      categories: ['cardiology', 'neurology', 'resuscitation', 'antibiotics', 'metabolism'],
      manufacturers: ['china', 'georgia', 'uzbekistan'],
      products: [
        // Кардиология
        { id: 1, name: 'ЭФЕС 5', category: 'cardiology', manufacturer: 'china', dosage: 'Фруктоза дифосфат натрия', image: 'public/products/Эфес-5.png' },
        { id: 2, name: 'ЛАЙФОН', category: 'cardiology', manufacturer: 'uzbekistan', dosage: 'Креатин фосфат натрия 1.0 г №1', image: 'public/products/Лайфон.png' },
        
        // Неврология
        { id: 3, name: 'ЛЕТОКАР', category: 'neurology', manufacturer: 'georgia', dosage: '4.2 г L-аргинина гидрохлорида, 100 мл', image: 'public/products/letokar.png' },
        { id: 4, name: 'ВЕГАС', category: 'neurology', manufacturer: 'china', dosage: 'Гемодериват крови телят 40.0 мг', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=300' },
        
        // Реанимация
        { id: 5, name: 'СТОЛАКСОЛ', category: 'resuscitation', manufacturer: 'uzbekistan', dosage: 'Электролиты, 100 мл / 200 мл', image: 'https://images.unsplash.com/photo-1585435557343-3b092031d831?w=300' },
        { id: 6, name: 'МЕГАСОЛ', category: 'resuscitation', manufacturer: 'georgia', dosage: 'Глюкоза 50 мг/мл, 100 мл / 250 мл', image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=300' },
        { id: 7, name: 'АМИНОМАГТ', category: 'resuscitation', manufacturer: 'china', dosage: '8% раствор L-аминокислот, 250 мл', image: 'https://images.unsplash.com/photo-1550572017-4170f7a3a7de?w=300' },
        { id: 8, name: 'ИНФУЗИОЛ-НED', category: 'resuscitation', manufacturer: 'uzbekistan', dosage: '5% раствор L-аминокислот, 100/250 мл', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300' },
        
        // Антибиотики
        { id: 9, name: 'МАКРОЦЕФ', category: 'antibiotics', manufacturer: 'china', dosage: 'Цефоперазон 1.0 г + сульбактам 1.0 г', image: 'https://images.unsplash.com/photo-1587854680352-b37d68a508e9?w=300' },
        { id: 10, name: 'АВРОЛА', category: 'antibiotics', manufacturer: 'uzbekistan', dosage: 'Левофлоксацин 500 мг, 100 мл', image: 'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=300' },
        
        // Метаболизм
        { id: 11, name: 'ДЕКАРИН', category: 'metabolism', manufacturer: 'georgia', dosage: 'Аргинозал + Кокарбоксилаза', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300' },
        { id: 12, name: 'ПЕПТАЗОЛ', category: 'metabolism', manufacturer: 'china', dosage: 'Пантопразол 45 мг', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300' },
        { id: 13, name: 'АОРТА', category: 'metabolism', manufacturer: 'uzbekistan', dosage: 'Железа (III) гидроксид 100 мг', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300' }
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesCategory = this.selectedCategories.length === 0 || 
                              this.selectedCategories.includes(product.category)
        const matchesManufacturer = this.selectedManufacturers.length === 0 || 
                                   this.selectedManufacturers.includes(product.manufacturer)
        
        return matchesCategory && matchesManufacturer
      })
    }
  },
  methods: {
    resetFilters() {
      this.selectedCategories = []
      this.selectedManufacturers = []
    }
  }
}
</script>