<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="gradient-bg py-16">
      <div class="container mx-auto px-4">
        <!-- Breadcrumb -->
        <div class="mb-8">
          <span class="text-xs font-semibold text-gray-500 uppercase tracking-widest">{{ $t('contact.badge') }}</span>
        </div>
        
        <div class="max-w-3xl text-left">
          <h1 class="text-2xl md:text-3xl font-bold text-heading-dark mb-3">{{ $t('contact.title') }}</h1>
          <p class="text-sm lg:text-base text-gray-600">{{ $t('contact.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="card-hover text-center p-6 rounded-xl bg-gradient-to-br from-theme-light to-white border border-theme-medium">
            <div class="w-16 h-16 bg-theme-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-phone-alt text-white text-lg"></i>
            </div>
            <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-2">{{ $t('contact.phoneTitle') }}</h3>
            <p class="text-sm text-gray-600 mb-1">+998 (95) 052-25-52</p>
            <p class="text-xs text-gray-500 mt-2">{{ $t('contact.phoneSchedule') }}</p>
          </div>

          <div class="card-hover text-center p-6 rounded-xl bg-gradient-to-br from-theme-light to-white border border-theme-medium">
            <div class="w-16 h-16 bg-theme-red rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-envelope text-white text-lg"></i>
            </div>
            <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-2">Email</h3>
            <p class="text-sm text-gray-600 mb-1">daantec.uz@gmail.com</p>
            <p class="text-xs text-gray-500 mt-2">{{ $t('contact.emailResponse') }}</p>
          </div>

          <div class="card-hover text-center p-6 rounded-xl bg-gradient-to-br from-theme-light to-white border border-theme-medium">
            <div class="w-16 h-16 bg-theme-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-map-marker-alt text-white text-lg"></i>
            </div>
            <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-2">{{ $t('contact.addressTitle') }}</h3>
            <p class="text-sm text-gray-600 mb-1">{{ $t('contact.addressCity') }}</p>
            <p class="text-sm text-gray-600">{{ $t('contact.addressDistrict') }}</p>
            <p class="text-xs text-gray-500 mt-2">{{ $t('contact.addressStreet') }}</p>
          </div>
        </div>

        <!-- Map and Form -->
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Map Placeholder -->
          <div>
            <div class="bg-gradient-to-br from-theme-light to-theme-medium rounded-2xl h-[500px] flex items-center justify-center">
              <div class="text-center">
                <i class="fas fa-map-marked-alt text-theme-blue text-5xl mb-3"></i>
                <p class="text-sm text-gray-600">{{ $t('contact.mapPlaceholder') }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <div class="bg-gradient-to-br from-theme-light to-white p-6 md:p-8 rounded-2xl border border-theme-medium">
              <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-6">{{ $t('contact.formTitle') }}</h2>
              <form @submit.prevent="submitForm" class="space-y-4">
                <div>
                  <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('contact.formName') }} *</label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.name"
                    class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                  >
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
                  <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('contact.formPhone') }}</label>
                  <input 
                    type="tel" 
                    v-model="form.phone"
                    class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                  >
                </div>

                <div>
                  <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('contact.formSubject') }} *</label>
                  <select 
                    required 
                    v-model="form.subject"
                    class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                  >
                    <option value="">{{ $t('contact.formSubjectPlaceholder') }}</option>
                    <option>{{ $t('contact.subjectGeneral') }}</option>
                    <option>{{ $t('contact.subjectPartnership') }}</option>
                    <option>{{ $t('contact.subjectOrder') }}</option>
                    <option>{{ $t('contact.subjectSupport') }}</option>
                    <option>{{ $t('contact.subjectOther') }}</option>
                  </select>
                </div>

                <div>
                  <label class="block text-gray-700 text-xs lg:text-sm font-semibold mb-1">{{ $t('contact.formMessage') }} *</label>
                  <textarea 
                    required 
                    rows="4" 
                    v-model="form.message"
                    class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-theme-blue outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  class="w-full btn-hover bg-theme-blue text-white px-6 py-3 rounded-lg text-sm font-semibold ripple"
                >
                  <i class="fas fa-paper-plane mr-2"></i>{{ $t('contact.formSubmit') }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 gradient-bg">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-3">{{ $t('contact.faqTitle') }}</h2>
            <p class="text-sm lg:text-base text-gray-600">{{ $t('contact.faqSubtitle') }}</p>
          </div>

          <div class="space-y-3">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index" 
              class="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <button 
                @click="toggleFaq(index)" 
                class="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition"
              >
                <span class="font-bold text-heading-dark text-sm lg:text-base">{{ $t(faq.question) }}</span>
                <i 
                  :class="faq.open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" 
                  class="text-theme-blue text-xs transition-transform"
                ></i>
              </button>
              <transition name="fade">
                <div v-if="faq.open" class="px-6 pb-4">
                  <p class="text-xs lg:text-sm text-gray-600 leading-relaxed">{{ $t(faq.answer) }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      faqs: [
        { question: 'contact.faq1Question', answer: 'contact.faq1Answer', open: false },
        { question: 'contact.faq2Question', answer: 'contact.faq2Answer', open: false },
        { question: 'contact.faq3Question', answer: 'contact.faq3Answer', open: false },
        { question: 'contact.faq4Question', answer: 'contact.faq4Answer', open: false },
        { question: 'contact.faq5Question', answer: 'contact.faq5Answer', open: false }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open
    },
    submitForm() {
      alert(this.$t('contact.formSuccess'))
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>