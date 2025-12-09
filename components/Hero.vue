<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 bg-cover bg-center bg-no-repeat relative"
    :style="`background-image: url('${heroData.backgroundImage}')`"
  >
    <!-- Dark overlay for better text contrast -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div class="max-w-5xl mx-auto text-center relative z-10">
      <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-8 leading-tight text-white" style="text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.8);">
        {{ heroData.title }}
      </h1>
      <p class="text-xl sm:text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto leading-relaxed" style="text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);">
        {{ heroData.subtitle }}
      </p>
      <a
        :href="heroData.ctaLink"
        class="inline-block bg-navy text-white font-semibold px-10 py-4 text-sm uppercase tracking-wider transition-colors duration-200 hover:bg-navy-500 rounded-lg"
      >
        {{ heroData.ctaText }}
      </a>
    </div>
  </section>
</template>

<script setup>
import heroData from '@/assets/data/hero.js'
</script>
