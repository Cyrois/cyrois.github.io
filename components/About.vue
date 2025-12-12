<template>
  <section id="about" class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center text-navy-500">
        About Me
      </h2>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        <div
          v-for="(stat, index) in aboutData.stats"
          :key="index"
          class="text-center p-6 bg-light-gray rounded-lg border border-medium-gray shadow-md"
        >
          <div class="text-4xl font-bold text-navy mb-2">{{ stat.value }}</div>
          <div class="text-lg font-semibold text-text-dark mb-1">{{ stat.label }}</div>
          <div class="text-sm text-text-gray">{{ stat.description }}</div>
        </div>
      </div>

      <div class="space-y-8 text-lg text-text-gray leading-relaxed">
        <p v-for="(paragraph, index) in aboutData.paragraphs" :key="index" v-html="paragraph">
          
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutData from '@/assets/data/about.js'
</script>
