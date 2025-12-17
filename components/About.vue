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
          :ref="el => statRefs[index] = el"
          :class="[
            'text-center p-6 bg-light-gray rounded-lg border border-medium-gray shadow-md transition-all duration-1000 md:duration-700 ease-out',
            statVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0',
            index === 0 ? (statVisible[index] ? '' : '-translate-x-12') : (statVisible[index] ? '' : 'translate-x-12')
          ]"
        >
          <div class="text-4xl font-bold text-navy mb-2">{{ stat.value }}</div>
          <div class="text-lg font-semibold text-text-dark mb-1">{{ stat.label }}</div>
          <div class="text-sm text-text-gray">{{ stat.description }}</div>
        </div>
      </div>

      <div
        ref="textRef"
        :class="[
          'space-y-8 text-lg text-text-gray leading-relaxed transition-all duration-1000 md:duration-800 ease-out',
          textVisible ? 'opacity-100' : 'opacity-0'
        ]"
      >
        <p v-for="(paragraph, index) in aboutData.paragraphs" :key="index" v-html="paragraph">

        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutData from '@/assets/data/about.js'
import { useScrollAnimation } from '@/composables/useScrollAnimation.js'

// Scroll animation for stats (2 elements)
const { elementRefs: statRefs, isVisibleArray: statVisible } = useScrollAnimation({ count: 2 })

// Scroll animation for text section (single element)
const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation()
</script>
