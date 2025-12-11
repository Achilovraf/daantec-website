<template>
  <div class="pt-20">
    
    <!-- Services Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Breadcrumb -->
        <div class="mb-12">
          <span class="text-xs font-semibold text-gray-500 uppercase tracking-widest">{{ $t('services.badge') }}</span>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="card-hover bg-gradient-to-br from-theme-light to-white p-6 rounded-xl border border-theme-medium"
          >
            <div class="w-12 h-12 bg-theme-blue rounded-lg flex items-center justify-center mb-4">
              <i :class="service.icon" class="text-white text-lg"></i>
            </div>
            <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-3">{{ $t(service.title) }}</h3>
            <p class="text-xs lg:text-sm text-gray-600 mb-4 leading-relaxed">{{ $t(service.description) }}</p>
            <ul class="space-y-2">
              <li v-for="(feature, idx) in service.features" :key="idx" class="flex items-start">
                <i class="fas fa-check text-theme-blue mr-2 mt-0.5 text-xs"></i>
                <span class="text-xs lg:text-sm text-gray-600">{{ $t(feature) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      services: [
        {
          icon: 'fas fa-truck-fast',
          title: 'services.service1Title',
          description: 'services.service1Desc',
          features: [
            'services.service1Feature1',
            'services.service1Feature2',
            'services.service1Feature3',
            'services.service1Feature4'
          ]
        },
        {
          icon: 'fas fa-warehouse',
          title: 'services.service2Title',
          description: 'services.service2Desc',
          features: [
            'services.service2Feature1',
            'services.service2Feature2',
            'services.service2Feature3',
            'services.service2Feature4'
          ]
        },
        {
          icon: 'fas fa-handshake-angle',
          title: 'services.service3Title',
          description: 'services.service3Desc',
          features: [
            'services.service3Feature1',
            'services.service3Feature2',
            'services.service3Feature3',
            'services.service3Feature4'
          ]
        },
        {
          icon: 'fas fa-chart-line',
          title: 'services.service4Title',
          description: 'services.service4Desc',
          features: [
            'services.service4Feature1',
            'services.service4Feature2',
            'services.service4Feature3',
            'services.service4Feature4'
          ]
        },
        {
          icon: 'fas fa-graduation-cap',
          title: 'services.service5Title',
          description: 'services.service5Desc',
          features: [
            'services.service5Feature1',
            'services.service5Feature2',
            'services.service5Feature3',
            'services.service5Feature4'
          ]
        },
        {
          icon: 'fas fa-headset',
          title: 'services.service6Title',
          description: 'services.service6Desc',
          features: [
            'services.service6Feature1',
            'services.service6Feature2',
            'services.service6Feature3',
            'services.service6Feature4'
          ]
        }
      ]
    }
  }
}
</script>