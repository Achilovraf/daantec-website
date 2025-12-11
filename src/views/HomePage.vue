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

          <!-- Video Player -->
          <div class="hero-image relative">
            <div 
              ref="videoContainer" 
              class="relative z-10 overflow-hidden rounded-2xl shadow-2xl group "
              @mouseenter="showControls = true"
              @mouseleave="showControls = false"
            >
              <video 
                ref="heroVideo"
                class="hero-video w-full h-full object-cover"
                loop 
                playsinline
                poster="/dantec-video-cadr.png"
                @timeupdate="updateProgress"
                @loadedmetadata="onVideoLoaded"
                @click="togglePlay"
              >
                <source src="/daantec-video.mp4" type="video/mp4">
                <track 
                  kind="subtitles" 
                  src="/subtitles-ru.vtt" 
                  srclang="ru" 
                  label="Русский"
                  v-if="showSubtitles"
                >
                <track 
                  kind="subtitles" 
                  src="/subtitles-uz.vtt" 
                  srclang="uz" 
                  label="O'zbek"
                  v-if="showSubtitles"
                >
                <track 
                  kind="subtitles" 
                  src="/subtitles-en.vtt" 
                  srclang="en" 
                  label="English"
                  v-if="showSubtitles"
                >
              </video>
              
              <!-- Play Button with Pulse Animation -->
              <div 
                v-show="!isPlaying" 
                class="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                <div class="relative pointer-events-auto cursor-pointer" @click="togglePlay">
                  <!-- Pulse rings -->
                  <div class="absolute inset-0 rounded-full bg-theme-blue opacity-30 animate-ping"></div>
                  <div class="absolute inset-0 rounded-full bg-theme-blue opacity-20 animate-pulse"></div>
                  
                  <!-- Play button -->
                  <div class="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110">
                    <div class="w-16 h-16 bg-gradient-to-br from-theme-blue to-blue-600 rounded-full flex items-center justify-center">
                      <i class="fas fa-play text-white text-2xl ml-1"></i>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Video Controls -->
              <div 
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transition-all duration-300 z-30"
                :class="showControls || !isPlaying ? 'opacity-100' : 'opacity-0'"
              >
                <!-- Progress Bar -->
                <div class="mb-3">
                  <input 
                    type="range" 
                    v-model="currentProgress" 
                    @input="seekVideo"
                    min="0" 
                    max="100" 
                    step="0.1"
                    class="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer video-progress"
                  >
                </div>

                <!-- Controls Row -->
                <div class="flex items-center justify-between gap-3">
                  <!-- Left Controls -->
                  <div class="flex items-center gap-2">
                    <!-- Play/Pause -->
                    <button 
                      @click="togglePlay"
                      class="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200"
                    >
                      <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'" class="text-white text-sm"></i>
                    </button>

                    <!-- Volume -->
                    <div class="flex items-center gap-2 group/volume">
                      <button 
                        @click="toggleMute"
                        class="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200"
                      >
                        <i 
                          :class="isMuted || volume === 0 ? 'fas fa-volume-mute' : volume < 50 ? 'fas fa-volume-down' : 'fas fa-volume-up'" 
                          class="text-white text-sm"
                        ></i>
                      </button>
                      
                      <!-- Volume Slider -->
                      <div class="hidden group-hover/volume:block">
                        <input 
                          type="range" 
                          v-model="volume" 
                          @input="changeVolume"
                          min="0" 
                          max="100"
                          class="w-20 h-1 bg-white/30 rounded-full appearance-none cursor-pointer volume-slider"
                        >
                      </div>
                    </div>

                    <!-- Time -->
                    <div class="text-white text-xs font-medium ml-1">
                      {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
                    </div>
                  </div>

                  <!-- Right Controls -->
                  <div class="flex items-center gap-2">
                    <!-- Subtitles -->
                    <button 
                      @click="toggleSubtitles"
                      class="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200"
                      :class="showSubtitles ? 'bg-theme-blue' : ''"
                    >
                      <i class="fas fa-closed-captioning text-white text-sm"></i>
                    </button>

                    <!-- Settings (Speed) -->
                    <div class="relative" ref="speedMenu">
                      
                      
                      <!-- Speed Menu -->
                      <div 
                        v-show="showSpeedMenu"
                        class="absolute bottom-full right-0 mb-2 bg-black/95 backdrop-blur-lg rounded-lg shadow-xl p-2 min-w-[120px]"
                      >
                        <div class="text-white text-xs font-semibold mb-2 px-2">Скорость</div>
                        <button 
                          v-for="speed in playbackSpeeds" 
                          :key="speed"
                          @click="changeSpeed(speed)"
                          class="w-full text-left px-3 py-1.5 text-white text-xs rounded hover:bg-white/20 transition-colors"
                          :class="playbackRate === speed ? 'bg-theme-blue' : ''"
                        >
                          {{ speed }}x
                        </button>
                      </div>
                    </div>

                    <!-- Fullscreen -->
                    <button 
                      @click="toggleFullscreen"
                      class="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200"
                    >
                      <i :class="isFullscreen ? 'fas fa-compress' : 'fas fa-expand'" class="text-white text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-theme-blue/20 to-transparent pointer-events-none"></div>
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

    <!-- Остальные секции без изменений... -->
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
      // Video state
      isPlaying: false,
      isMuted: true,
      showControls: false,
      showSubtitles: false,
      showSpeedMenu: false,
      isFullscreen: false,
      
      // Video progress
      currentTime: 0,
      duration: 0,
      currentProgress: 0,
      
      // Audio
      volume: 50,
      
      // Playback
      playbackRate: 1,
      playbackSpeeds: [0.5, 0.75, 1, 1.25, 1.5, 2],
      
      // Stats
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
    
    // Close speed menu when clicking outside
    document.addEventListener('click', this.handleClickOutside);
    
    // Fullscreen change listener
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
  },
  beforeUnmount() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    document.removeEventListener('click', this.handleClickOutside);
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
  },
  methods: {
    // Video Controls
    onVideoLoaded() {
      this.duration = this.$refs.heroVideo.duration;
      this.$refs.heroVideo.volume = this.volume / 100;
    },
    
    togglePlay() {
      const video = this.$refs.heroVideo;
      if (video.paused) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    },
    
    toggleMute() {
      this.isMuted = !this.isMuted;
      this.$refs.heroVideo.muted = this.isMuted;
    },
    
    changeVolume() {
      const video = this.$refs.heroVideo;
      video.volume = this.volume / 100;
      this.isMuted = this.volume === 0;
      video.muted = this.isMuted;
    },
    
    updateProgress() {
      const video = this.$refs.heroVideo;
      this.currentTime = video.currentTime;
      this.currentProgress = (video.currentTime / video.duration) * 100;
    },
    
    seekVideo() {
      const video = this.$refs.heroVideo;
      const time = (this.currentProgress / 100) * video.duration;
      video.currentTime = time;
    },
    
    toggleSubtitles() {
      this.showSubtitles = !this.showSubtitles;
      const video = this.$refs.heroVideo;
      const tracks = video.textTracks;
      
      for (let i = 0; i < tracks.length; i++) {
        tracks[i].mode = this.showSubtitles ? 'showing' : 'hidden';
      }
    },
    
    changeSpeed(speed) {
      this.playbackRate = speed;
      this.$refs.heroVideo.playbackRate = speed;
      this.showSpeedMenu = false;
    },
    
    toggleFullscreen() {
      const container = this.$refs.videoContainer;
      
      if (!this.isFullscreen) {
        if (container.requestFullscreen) {
          container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
          container.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    },
    
    handleFullscreenChange() {
      this.isFullscreen = !!document.fullscreenElement;
    },
    
    handleClickOutside(event) {
      if (this.$refs.speedMenu && !this.$refs.speedMenu.contains(event.target)) {
        this.showSpeedMenu = false;
      }
    },
    
    formatTime(seconds) {
      if (isNaN(seconds)) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    },
    
    // Animations
    initGsapAnimations() {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.8 })
        .from(".hero-title", { y: 50, opacity: 0, duration: 1 }, "-=0.4")
        .from(".hero-text", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-buttons", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".stat-item", { y: 30, opacity: 0, duration: 0.6, stagger: 0.15 }, "-=0.5");

      gsap.from(".hero-image", { x: 100, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.5 });
      gsap.to(".hero-video", { yPercent: -10, ease: "none", scrollTrigger: { trigger: ".hero-image", start: "top bottom", end: "bottom top", scrub: true } });
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

<style scoped>
/* Pulse animation для Play кнопки */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.5;
  }
}

/* Custom Range Sliders */
.video-progress {
  background: linear-gradient(to right, #0066cc 0%, #0066cc var(--progress, 0%), rgba(255,255,255,0.3) var(--progress, 0%), rgba(255,255,255,0.3) 100%);
}

.video-progress::-webkit-slider-thumb {
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.video-progress::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.volume-slider::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
}

.volume-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  border: none;
}
</style>