<template>
  <nav :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
    isScrolled
      ? 'bg-white shadow-sm'
      : 'bg-transparent'
  ]"
  :style="{
    borderBottom: isScrolled ? '1px solid #E5E9F0' : 'none',
    transitionProperty: 'background-color, box-shadow, border-bottom',
    transitionDelay: isScrolled ? '150ms, 400ms, 400ms' : '0ms, 0ms, 0ms'
  }">
    <div
      :style="{
        maxWidth: isScrolled ? '100%' : '80rem',
        margin: isScrolled ? '0' : '0 auto'
      }"
      class="px-4 sm:px-6 lg:px-8 transition-all duration-400 ease-in-out"
    >
      <div :class="[
        'flex justify-between items-center transition-all duration-400',
        isScrolled ? 'h-20' : 'h-28'
      ]">
        <div :class="[
          'font-bold uppercase tracking-tight transition-all duration-400',
          isScrolled ? 'text-2xl text-navy' : 'text-3xl text-white'
        ]">Calvin Chan</div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-10">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            :class="[
              link.isButton
                ? 'border-2 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy'
                : 'text-sm font-medium uppercase tracking-wide transition-all duration-200 hover:scale-105 border-b-2 border-transparent hover:border-current focus:outline-none focus:ring-2 focus:ring-offset-2',
              isScrolled
                ? (link.isButton ? 'border-navy text-navy hover:bg-navy hover:text-white' : 'text-text-dark hover:text-navy focus:ring-navy')
                : (link.isButton ? 'border-white text-white hover:bg-white hover:text-navy' : 'text-white hover:text-gray-200 focus:ring-white')
            ]"
          >{{ link.label }}</a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
          :class="[
            'md:hidden p-2 rounded-[2px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-navy',
            isScrolled
              ? 'text-navy hover:bg-light-gray'
              : 'text-white hover:bg-white/10'
          ]"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-medium-gray bg-white">
      <div class="px-4 pt-2 pb-3 space-y-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="mobileMenuOpen = false"
          :class="[
            'block px-3 py-3 rounded-md transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
            link.isButton
              ? 'text-white bg-navy hover:bg-navy-500 rounded-[2px] font-semibold text-center focus:ring-white'
              : 'text-text-dark hover:text-navy hover:bg-light-gray focus:ring-navy'
          ]"
        >{{ link.label }}</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#work-experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact', isButton: true }
]

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

// Check if we're on a details page (projects/[slug] or work/[slug])
const isDetailsPage = computed(() => {
  return route.path.startsWith('/projects/') || route.path.startsWith('/work/')
})

// Force scrolled state on details pages for better visibility
const isScrolled = computed(() => {
  return isDetailsPage.value || scrolled.value
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
