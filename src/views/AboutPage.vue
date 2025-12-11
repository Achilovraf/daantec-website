<template>
  <div class="pt-20">
    <!-- Company History -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Breadcrumb - левый верхний угол -->
        <div class="mb-12">
          <span class="text-xs font-semibold text-gray-500 uppercase tracking-widest">{{ $t('about.badge') }}</span>
        </div>

        <div class="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-4">{{ $t('about.historyTitle') }}</h2>
            <p class="text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
              {{ $t('about.historyText1') }}
            </p>
            <p class="text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
              {{ $t('about.historyText2') }}
            </p>
            <p class="text-sm lg:text-base text-gray-600 leading-relaxed">
              {{ $t('about.historyText3') }}
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" 
              alt="Офис" 
              class="rounded-2xl shadow-2xl"
            >
          </div>
        </div>

        <!-- Values -->
        <div class="text-center mb-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-3">{{ $t('about.valuesTitle') }}</h2>
          <p class="text-sm lg:text-base text-gray-600">{{ $t('about.valuesSubtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(value, index) in values" 
            :key="index" 
            class="card-hover text-center p-6 rounded-xl bg-gradient-to-br from-theme-light to-white border border-theme-medium"
          >
            <div class="w-14 h-14 bg-theme-blue rounded-xl flex items-center justify-center mx-auto mb-4">
              <i :class="value.icon" class="text-white text-xl"></i>
            </div>
            <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-2">{{ $t(value.title) }}</h3>
            <p class="text-xs lg:text-sm text-gray-600 leading-relaxed">{{ $t(value.description) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 gradient-bg">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-3">{{ $t('about.teamTitle') }}</h2>
          <p class="text-sm lg:text-base text-gray-600">{{ $t('about.teamSubtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(member, index) in team" 
            :key="index" 
            class="card-hover bg-white rounded-xl overflow-hidden shadow-lg text-center"
          >
            <div class="h-56 overflow-hidden">
              <img :src="member.photo" :alt="member.name" class="w-full h-full object-cover">
            </div>
            <div class="p-5">
              <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-1">{{ $t(member.name) }}</h3>
              <p class="text-theme-blue text-xs lg:text-sm font-semibold mb-3">{{ $t(member.position) }}</p>
              <div class="flex justify-center space-x-2">
                <a href="#" class="w-8 h-8 bg-theme-light rounded-lg flex items-center justify-center hover:bg-theme-blue hover:text-white transition text-xs">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="w-8 h-8 bg-theme-light rounded-lg flex items-center justify-center hover:bg-theme-blue hover:text-white transition text-xs">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certificates -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-3">{{ $t('about.certificatesTitle') }}</h2>
          <p class="text-sm lg:text-base text-gray-600">{{ $t('about.certificatesSubtitle') }}</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            v-for="n in 8" 
            :key="n" 
            class="card-hover bg-gradient-to-br from-theme-light to-white p-6 rounded-xl border border-theme-medium flex items-center justify-center"
          >
            <i class="fas fa-certificate text-theme-blue text-4xl lg:text-5xl"></i>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      values: [
        {
          icon: 'fas fa-shield-alt',
          title: 'about.valueQuality',
          description: 'about.valueQualityDesc'
        },
        {
          icon: 'fas fa-heart',
          title: 'about.valueCare',
          description: 'about.valueCareDesc'
        },
        {
          icon: 'fas fa-handshake',
          title: 'about.valueReliability',
          description: 'about.valueReliabilityDesc'
        },
        {
          icon: 'fas fa-star',
          title: 'about.valueInnovation',
          description: 'about.valueInnovationDesc'
        }
      ],
      team: [
        {
          name: 'about.founderRole',
          position: 'about.founderRole',
          photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces'
        },
        {
          name: 'about.founderRole',
          position: 'about.founderRole',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces'
        },
        {
          name: 'about.marketingTeam',
          position: 'about.marketingRole',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces'
        },
        {
          name: 'about.logisticsTeam',
          position: 'about.logisticsRole',
          photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=faces'
        }
      ]
    }
  }
}
</script>