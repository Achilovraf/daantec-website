<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="gradient-blue text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <!-- Breadcrumb -->
        <div class="mb-8">
          <span class="text-xs font-semibold text-white opacity-70 uppercase tracking-widest">{{ $t('partners.badge') }}</span>
        </div>
        
        <div class="max-w-3xl text-left">
          <h1 class="text-3xl lg:text-5xl font-bold mb-4">{{ $t('partners.heroTitle') }}</h1>
          <p class="text-base lg:text-lg opacity-90 mb-6">{{ $t('partners.heroSubtitle') }}</p>
          <button 
            @click="scrollToForm" 
            class="bg-white text-theme-blue px-6 py-3 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition"
          >
            <i class="fas fa-handshake mr-2"></i>{{ $t('partners.heroButton') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-3">{{ $t('partners.benefitsTitle') }}</h2>
          <p class="text-sm lg:text-base text-gray-600">{{ $t('partners.benefitsSubtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(benefit, index) in benefits" 
            :key="index" 
            class="card-hover bg-gradient-to-br from-theme-light to-white p-6 rounded-xl border border-theme-medium"
          >
            <div class="w-12 h-12 bg-theme-blue rounded-lg flex items-center justify-center mb-4">
              <i :class="benefit.icon" class="text-white text-lg"></i>
            </div>
            <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-2">{{ $t(benefit.title) }}</h3>
            <p class="text-xs lg:text-sm text-gray-600 leading-relaxed">{{ $t(benefit.description) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Steps Section -->
    <section class="py-16 gradient-bg">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-3">{{ $t('partners.stepsTitle') }}</h2>
          <p class="text-sm lg:text-base text-gray-600">{{ $t('partners.stepsSubtitle') }}</p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div 
            v-for="(step, index) in steps" 
            :key="index" 
            class="flex items-start mb-8 last:mb-0"
          >
            <div class="flex-shrink-0 w-12 h-12 bg-theme-blue rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
              {{ index + 1 }}
            </div>
            <div class="flex-grow">
              <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-1">{{ $t(step.title) }}</h3>
              <p class="text-xs lg:text-sm text-gray-600 leading-relaxed">{{ $t(step.description) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-3">{{ $t('partners.storiesTitle') }}</h2>
          <p class="text-sm lg:text-base text-gray-600">{{ $t('partners.storiesSubtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div 
            v-for="(story, index) in successStories" 
            :key="index" 
            class="card-hover bg-gradient-to-br from-theme-light to-white p-6 rounded-xl border border-theme-medium"
          >
            <div class="flex items-center mb-4">
              <img :src="story.logo" alt="Logo" class="w-12 h-12 rounded-full mr-3">
              <div>
                <h4 class="text-sm lg:text-base font-bold text-heading-dark">{{ $t(story.company) }}</h4>
                <p class="text-gray-600 text-xs">{{ $t(story.city) }}</p>
              </div>
            </div>
            <p class="text-xs lg:text-sm text-gray-600 mb-3 leading-relaxed">"{{ $t(story.review) }}"</p>
            <div class="flex text-yellow-400 text-xs">
              <i v-for="n in 5" :key="n" class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Form -->
    <section id="partner-form" class="py-16 gradient-bg">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <div class="bg-white p-6 md:p-8 rounded-2xl shadow-2xl">
            <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-3 text-center">{{ $t('partners.formTitle') }}</h2>
            <p class="text-xs lg:text-sm text-gray-600 text-center mb-6">{{ $t('partners.formSubtitle') }}</p>
            
            <form @submit.prevent="submitForm" class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('partners.formCompany') }} *</label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.companyName"
                    class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                  >
                </div>
                <div>
                  <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('partners.formInn') }} *</label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.inn"
                    class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                  >
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('partners.formContact') }} *</label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.contactPerson"
                    class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                  >
                </div>
                <div>
                  <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('partners.formPhone') }} *</label>
                  <input 
                    type="tel" 
                    required 
                    v-model="form.phone"
                    class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                  >
                </div>
              </div>

              <div>
                <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">Email *</label>
                <input 
                  type="email" 
                  required 
                  v-model="form.email"
                  class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                >
              </div>

              <div>
                <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('partners.formCity') }} *</label>
                <input 
                  type="text" 
                  required 
                  v-model="form.city"
                  class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                >
              </div>

              <div>
                <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('partners.formCategories') }}</label>
                <div class="grid grid-cols-2 gap-2">
                  <label 
                    v-for="(category, idx) in categories" 
                    :key="idx" 
                    class="flex items-center space-x-2 text-xs lg:text-sm"
                  >
                    <input 
                      type="checkbox" 
                      :value="category"
                      v-model="form.categories"
                      class="rounded text-theme-blue"
                    >
                    <span>{{ $t(category) }}</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('partners.formMessage') }}</label>
                <textarea 
                  rows="3" 
                  v-model="form.message"
                  class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                ></textarea>
              </div>

              <div class="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  required 
                  v-model="form.agreement"
                  class="rounded text-theme-blue"
                >
                <span class="text-xs text-gray-600">
                  {{ $t('partners.formAgreement') }}
                </span>
              </div>

              <button 
                type="submit" 
                class="w-full btn-hover bg-theme-blue text-white px-6 py-3 rounded-lg text-sm font-semibold ripple"
              >
                <i class="fas fa-paper-plane mr-2"></i>{{ $t('partners.formSubmit') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PartnersPage',
  data() {
    return {
      form: {
        companyName: '',
        inn: '',
        contactPerson: '',
        phone: '',
        email: '',
        city: '',
        categories: [],
        message: '',
        agreement: false
      },
      benefits: [
        { icon: 'fas fa-percent', title: 'partners.benefit1Title', description: 'partners.benefit1Desc' },
        { icon: 'fas fa-truck-fast', title: 'partners.benefit2Title', description: 'partners.benefit2Desc' },
        { icon: 'fas fa-handshake', title: 'partners.benefit3Title', description: 'partners.benefit3Desc' },
        { icon: 'fas fa-boxes-stacked', title: 'partners.benefit4Title', description: 'partners.benefit4Desc' },
        { icon: 'fas fa-chart-line', title: 'partners.benefit5Title', description: 'partners.benefit5Desc' },
        { icon: 'fas fa-headset', title: 'partners.benefit6Title', description: 'partners.benefit6Desc' }
      ],
      steps: [
        { title: 'partners.step1Title', description: 'partners.step1Desc' },
        { title: 'partners.step2Title', description: 'partners.step2Desc' },
        { title: 'partners.step3Title', description: 'partners.step3Desc' },
        { title: 'partners.step4Title', description: 'partners.step4Desc' }
      ],
      successStories: [
        { company: 'partners.story1Company', city: 'partners.story1City', logo: 'https://ui-avatars.com/api/?name=A&background=0B497A&color=fff', review: 'partners.story1Review' },
        { company: 'partners.story2Company', city: 'partners.story2City', logo: 'https://ui-avatars.com/api/?name=V&background=0B497A&color=fff', review: 'partners.story2Review' },
        { company: 'partners.story3Company', city: 'partners.story3City', logo: 'https://ui-avatars.com/api/?name=M&background=0B497A&color=fff', review: 'partners.story3Review' }
      ],
      categories: ['partners.catCardiology', 'partners.catNeurology', 'partners.catResuscitation', 'partners.catAll']
    }
  },
  methods: {
    scrollToForm() {
      document.getElementById('partner-form').scrollIntoView({ behavior: 'smooth' })
    },
    submitForm() {
      alert(this.$t('partners.formSuccess'))
      this.form = {
        companyName: '',
        inn: '',
        contactPerson: '',
        phone: '',
        email: '',
        city: '',
        categories: [],
        message: '',
        agreement: false
      }
    }
  }
}
</script>