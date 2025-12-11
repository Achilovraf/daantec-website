<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class=" py-16">
      <div class="container  mx-auto px-4">
        <!-- Breadcrumb -->
        <div class="mb-8">
          <span class="text-xs font-semibold text-gray-500 uppercase tracking-widest">{{ $t('blog.badge') }}</span>
        </div>

        <div class="relative max-w-xl mx-auto">
      <input 
        type="text" 
        v-model="searchQuery"
        :placeholder="$t('blog.searchPlaceholder')"
        class="w-full px-6 py-4  text-sm gradient-bg rounded-xl border-2 border-transparent bg-white/90 backdrop-blur-sm focus:border-theme-blue focus:bg-white outline-none shadow-lg transition-all duration-300 placeholder:text-gray-400"
      >
      <i class="fas fa-search absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none"></i>
    </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Filters -->
        <div class="flex flex-wrap gap-3 mb-12 justify-center">
          <button 
            @click="selectedCategory = 'all'"
            :class="[
              'px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold transition',
              selectedCategory === 'all' 
                ? 'bg-theme-blue text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ $t('blog.filterAll') }}
          </button>
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold transition',
              selectedCategory === category 
                ? 'bg-theme-blue text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ $t(`blog.category${category}`) }}
          </button>
        </div>

        <!-- Posts Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="card-hover bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="post.image" 
                :alt="$t(post.title)" 
                class="w-full h-full object-cover"
              >
              <div class="absolute top-3 left-3 bg-theme-blue text-white px-3 py-1 rounded-lg text-xs font-semibold">
                {{ $t(`blog.category${post.category}`) }}
              </div>
            </div>
            <div class="p-5">
              <div class="flex items-center text-gray-500 text-xs mb-2">
                <i class="far fa-calendar mr-1"></i>
                <span>{{ $t(post.date) }}</span>
                <span class="mx-2">•</span>
                <i class="far fa-clock mr-1"></i>
                <span>{{ post.readTime }} {{ $t('blog.min') }}</span>
              </div>
              <h3 class="text-base lg:text-lg font-bold text-heading-dark mb-2 hover:text-theme-blue transition">
                {{ $t(post.title) }}
              </h3>
              <p class="text-xs lg:text-sm text-gray-600 mb-3 leading-relaxed">{{ $t(post.excerpt) }}</p>
              <a href="#" class="text-theme-blue text-xs lg:text-sm font-semibold inline-flex items-center hover:underline">
                {{ $t('blog.readMore') }} <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-12 space-x-2">
          <button class="w-8 h-8 bg-theme-blue text-white text-sm rounded-lg hover:bg-opacity-90 transition">1</button>
          <button class="w-8 h-8 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition">2</button>
          <button class="w-8 h-8 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition">3</button>
          <button class="w-8 h-8 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition">
            <i class="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 gradient-blue text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl lg:text-3xl font-bold mb-3">{{ $t('blog.newsletterTitle') }}</h2>
          <p class="text-sm lg:text-base mb-6 opacity-90">{{ $t('blog.newsletterSubtitle') }}</p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input 
              type="email" 
              v-model="newsletterEmail"
              :placeholder="$t('blog.newsletterPlaceholder')"
              required
              class="flex-1 px-4 py-2 text-sm rounded-lg text-gray-900 outline-none"
            >
            <button 
              type="submit"
              class="bg-white text-theme-blue px-6 py-2 text-sm rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              {{ $t('blog.newsletterButton') }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      newsletterEmail: '',
      categories: ['News', 'Reviews', 'Analytics', 'Law', 'Tech'],
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop',
          category: 'News',
          date: 'blog.post1Date',
          readTime: 5,
          title: 'blog.post1Title',
          excerpt: 'blog.post1Excerpt'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
          category: 'Reviews',
          date: 'blog.post2Date',
          readTime: 7,
          title: 'blog.post2Title',
          excerpt: 'blog.post2Excerpt'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop',
          category: 'Analytics',
          date: 'blog.post3Date',
          readTime: 10,
          title: 'blog.post3Title',
          excerpt: 'blog.post3Excerpt'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
          category: 'Tech',
          date: 'blog.post4Date',
          readTime: 6,
          title: 'blog.post4Title',
          excerpt: 'blog.post4Excerpt'
        },
        {
          id: 5,
          image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
          category: 'Law',
          date: 'blog.post5Date',
          readTime: 8,
          title: 'blog.post5Title',
          excerpt: 'blog.post5Excerpt'
        },
        {
          id: 6,
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
          category: 'News',
          date: 'blog.post6Date',
          readTime: 4,
          title: 'blog.post6Title',
          excerpt: 'blog.post6Excerpt'
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      let filtered = this.posts

      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(post => post.category === this.selectedCategory)
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(post => 
          this.$t(post.title).toLowerCase().includes(query) || 
          this.$t(post.excerpt).toLowerCase().includes(query)
        )
      }

      return filtered
    }
  },
  methods: {
    subscribeNewsletter() {
      alert(this.$t('blog.newsletterSuccess') + this.newsletterEmail)
      this.newsletterEmail = ''
    }
  }
}
</script>