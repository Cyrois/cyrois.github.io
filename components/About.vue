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
import { ref, onMounted, onBeforeUnmount } from 'vue'

const statRefs = ref([])
const statVisible = ref([false, false])
const textRef = ref(null)
const textVisible = ref(false)

let observers = []

onMounted(() => {
  // Observe each stat
  statRefs.value.forEach((el, index) => {
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statVisible.value[index] = true
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    observers.push(observer)
  })

  // Observe text section
  if (textRef.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(textRef.value)
    observers.push(observer)
  }
})

onBeforeUnmount(() => {
  observers.forEach(observer => observer.disconnect())
})
</script>
