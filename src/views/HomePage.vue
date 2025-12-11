<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center gradient-bg overflow-hidden pt-20">
      <!-- Decorative Elements -->
      <div class="hero-blob-1 absolute top-20 right-10 w-72 h-72 bg-theme-blue opacity-10 rounded-full shape-blob"></div>
      <div class="hero-blob-2 absolute bottom-20 left-10 w-96 h-96 bg-theme-medium opacity-20 rounded-full shape-blob"></div>

      <div class="container mx-auto px-4 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="hero-badge inline-block bg-theme-blue text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              <i class="fas fa-check-circle mr-1.5"></i>{{ $t("hero.badge") }}
            </div>
            <h1 class="hero-title text-3xl lg:text-5xl font-bold text-heading-dark mb-4 leading-tight">
              {{ $t("hero.title") }}<br />в каждом
              <span class="text-theme-red">{{ $t("hero.titleAccent") }}</span>
            </h1>
            <p class="hero-text text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
              {{ $t("hero.subtitle") }}
            </p>
            <div class="hero-buttons flex flex-col sm:flex-row gap-3">
              <router-link to="/partners" class="btn-hover bg-theme-blue text-white px-6 py-3 rounded-lg font-semibold text-sm text-center ripple">
                <i class="fas fa-handshake mr-2"></i>{{ $t("hero.btnPartner") }}
              </router-link>
              <router-link to="/products" class="btn-hover bg-white text-theme-blue border-2 border-theme-blue px-6 py-3 rounded-lg font-semibold text-sm text-center">
                <i class="fas fa-box-open mr-2"></i>{{ $t("hero.btnCatalog") }}
              </router-link>
            </div>

            <!-- Stats -->
            <div class="hero-stats grid grid-cols-3 gap-4 mt-8">
              <div class="stat-item">
                <div class="text-2xl lg:text-3xl font-bold text-theme-blue counter">{{ animatedYears }}+</div>
                <div class="text-xs lg:text-sm text-gray-600 mt-1">{{ $t("hero.statsYears") }}</div>
              </div>
              <div class="stat-item">
                <div class="text-2xl lg:text-3xl font-bold text-theme-red counter">{{ animatedPartners }}+</div>
                <div class="text-xs lg:text-sm text-gray-600 mt-1">{{ $t("hero.statsPartners") }}</div>
              </div>
              <div class="stat-item">
                <div class="text-2xl lg:text-3xl font-bold text-theme-blue counter">{{ animatedProducts }}</div>
                <div class="text-xs lg:text-sm text-gray-600 mt-1">{{ $t("hero.statsCountries") }}</div>
              </div>
            </div>
          </div>

          <div class="hero-image relative">
            <div class="relative z-10">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=1000&fit=crop" alt="Фармацевт" class="hero-img rounded-3xl shadow-2xl" />
            </div>
            <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-theme-blue opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <i class="fas fa-chevron-down text-theme-blue text-xl"></i>
      </div>
    </section>

    <!-- Directions Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-2xl lg:text-3xl font-bold text-heading-dark mb-3">{{ $t("directions.title") }}</h2>
          <p class="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">{{ $t("directions.subtitle") }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(direction, index) in directions" :key="index" class="card-hover bg-gradient-to-br from-theme-light to-white p-6 rounded-xl border border-theme-medium group animate-fade-in-up" :style="{ animationDelay: index * 0.1 + 's' }">
            <div class="w-12 h-12 bg-theme-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i :class="direction.icon" class="text-white text-lg"></i>
            </div>
            <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-2">{{ $t(direction.title) }}</h3>
            <p class="text-xs lg:text-sm text-gray-600 mb-3 leading-relaxed">{{ $t(direction.description) }}</p>
            <a href="#" class="text-theme-blue text-xs lg:text-sm font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
              {{ $t("directions.more") }} <i class="fas fa-arrow-right ml-1.5 text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 gradient-bg">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="why-content">
            <h2 class="why-title text-2xl lg:text-3xl font-bold text-heading-dark mb-4">{{ $t("whyUs.title") }}</h2>
            <p class="why-subtitle text-sm lg:text-base text-gray-600 mb-6">{{ $t("whyUs.subtitle") }}</p>

            <div class="space-y-4">
              <div v-for="(benefit, index) in benefits" :key="index" class="benefit-item flex items-start space-x-3">
                <div class="flex-shrink-0 w-10 h-10 bg-theme-blue rounded-lg flex items-center justify-center">
                  <i :class="benefit.icon" class="text-white text-base"></i>
                </div>
                <div>
                  <h4 class="text-sm lg:text-base font-bold text-heading-dark mb-1">{{ $t(benefit.title) }}</h4>
                  <p class="text-xs lg:text-sm text-gray-600 leading-relaxed">{{ $t(benefit.description) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="why-image relative">
            <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop" alt="Склад" class="why-img rounded-2xl shadow-2xl" />
            <div class="quality-badge absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i class="fas fa-check text-green-500 text-lg"></i>
                </div>
                <div>
                  <div class="text-xl font-bold text-heading-dark">100%</div>
                  <div class="text-xs text-gray-600">{{ $t("whyUs.guarantee") }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 gradient-blue text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="cta-content max-w-3xl mx-auto text-center">
          <h2 class="cta-title text-2xl lg:text-3xl font-bold mb-4">{{ $t("cta.title") }}</h2>
          <p class="cta-text text-sm lg:text-base mb-8 opacity-90">{{ $t("cta.subtitle") }}</p>

          <div class="cta-buttons flex flex-col sm:flex-row gap-3 justify-center">
            <router-link to="/partners" class="bg-white text-theme-blue px-6 py-3 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition inline-flex items-center justify-center">
              <i class="fas fa-handshake mr-2"></i>{{ $t("cta.btnPartner") }}
            </router-link>
            <router-link to="/contact" class="border-2 border-white text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white hover:text-theme-blue transition inline-flex items-center justify-center">
              <i class="fas fa-phone mr-2"></i>{{ $t("cta.btnContact") }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "HomePage",
  data() {
    return {
      animatedYears: 0,
      animatedPartners: 0,
      animatedProducts: 0,
      directions: [
        { icon: "fas fa-heartbeat", title: "directions.cardiology.title", description: "directions.cardiology.desc" },
        { icon: "fas fa-brain", title: "directions.neurology.title", description: "directions.neurology.desc" },
        { icon: "fas fa-hospital", title: "directions.resuscitation.title", description: "directions.resuscitation.desc" },
        { icon: "fas fa-globe-americas", title: "directions.standards.title", description: "directions.standards.desc" }
      ],
      benefits: [
        { icon: "fas fa-certificate", title: "whyUs.certification.title", description: "whyUs.certification.desc" },
        { icon: "fas fa-industry", title: "whyUs.direct.title", description: "whyUs.direct.desc" },
        { icon: "fas fa-shield-alt", title: "whyUs.quality.title", description: "whyUs.quality.desc" },
        { icon: "fas fa-user-md", title: "whyUs.expertise.title", description: "whyUs.expertise.desc" }
      ]
    };
  },
  mounted() {
    this.initGsapAnimations();
    this.animateCounters();
  },
  beforeUnmount() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  },
  methods: {
    initGsapAnimations() {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.8 })
        .from(".hero-title", { y: 50, opacity: 0, duration: 1 }, "-=0.4")
        .from(".hero-text", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-buttons", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".stat-item", { y: 30, opacity: 0, duration: 0.6, stagger: 0.15 }, "-=0.5");

      gsap.from(".hero-image", { x: 100, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.5 });
      gsap.to(".hero-img", { yPercent: -20, ease: "none", scrollTrigger: { trigger: ".hero-image", start: "top bottom", end: "bottom top", scrub: true } });
      gsap.to(".hero-blob-1", { y: -150, rotation: 360, ease: "none", scrollTrigger: { trigger: ".hero-blob-1", start: "top bottom", end: "bottom top", scrub: true } });
      gsap.to(".hero-blob-2", { y: -200, rotation: -360, ease: "none", scrollTrigger: { trigger: ".hero-blob-2", start: "top bottom", end: "bottom top", scrub: true } });
      gsap.to(".scroll-indicator", { y: 10, repeat: -1, yoyo: true, duration: 0.8, ease: "power1.inOut" });

      gsap.from(".why-title", { x: -80, opacity: 0, duration: 1, scrollTrigger: { trigger: ".why-content", start: "top 75%" } });
      gsap.from(".why-subtitle", { x: -60, opacity: 0, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: ".why-content", start: "top 75%" } });
      gsap.from(".benefit-item", { x: -50, opacity: 0, duration: 0.8, stagger: 0.15, scrollTrigger: { trigger: ".benefit-item", start: "top 85%" } });
      gsap.from(".why-image", { x: 100, opacity: 0, duration: 1.2, scrollTrigger: { trigger: ".why-image", start: "top 75%" } });
      gsap.to(".why-img", { scale: 1.1, ease: "none", scrollTrigger: { trigger: ".why-img", start: "top bottom", end: "bottom top", scrub: true } });
      gsap.from(".quality-badge", { scale: 0, rotation: -180, opacity: 0, duration: 0.8, ease: "back.out(1.7)", scrollTrigger: { trigger: ".quality-badge", start: "top 85%" } });

      gsap.from(".cta-title", { scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.7)", scrollTrigger: { trigger: ".cta-content", start: "top 80%" } });
      gsap.from(".cta-text", { y: 30, opacity: 0, duration: 0.8, delay: 0.3, scrollTrigger: { trigger: ".cta-content", start: "top 80%" } });
      gsap.from(".cta-buttons", { y: 30, opacity: 0, duration: 0.8, delay: 0.5, scrollTrigger: { trigger: ".cta-content", start: "top 80%" } });
    },

    animateCounters() {
      const duration = 2000, steps = 60, yearTarget = 15, partnersTarget = 50, productsTarget = 3;
      const yearIncrement = yearTarget / steps, partnersIncrement = partnersTarget / steps, productsIncrement = productsTarget / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        this.animatedYears = Math.min(Math.floor(yearIncrement * currentStep), yearTarget);
        this.animatedPartners = Math.min(Math.floor(partnersIncrement * currentStep), partnersTarget);
        this.animatedProducts = Math.min(Math.floor(productsIncrement * currentStep), productsTarget);
        if (currentStep >= steps) clearInterval(interval);
      }, duration / steps);
    }
  }
};
</script>