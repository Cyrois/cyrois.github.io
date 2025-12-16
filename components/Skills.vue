<template>
  <section id="skills" class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center text-navy-500">
        Skills & Expertise
      </h2>
      <div ref="gridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(skill, index) in skills"
          :key="skill.title"
          :class="[
            'p-8 bg-white border-l-4 border-t border-r border-b border-medium-gray shadow-md hover:shadow-xl rounded-[2px]',
            'transition-all duration-1000 md:duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          ]"
          :style="{
            borderLeftColor: skill.color,
            transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
          }"
        >
          <div class="flex items-start gap-4 mb-4">
            <component
              :is="iconComponents[skill.icon]"
              :size="32"
              :color="skill.color"
              class="flex-shrink-0"
            />
            <h3 class="text-xl font-bold text-navy-500">{{ skill.title }}</h3>
          </div>
          <p class="text-text-gray leading-relaxed">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import skills from '@/assets/data/skills.js'
import { Monitor, Server, Cloud, Database, ClipboardList, Users } from 'lucide-vue-next'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const iconComponents = {
  Monitor,
  Server,
  Cloud,
  Database,
  ClipboardList,
  Users
}

const gridRef = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  if (!gridRef.value) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  observer.observe(gridRef.value)
})

onBeforeUnmount(() => {
  if (observer && gridRef.value) {
    observer.unobserve(gridRef.value)
  }
})
</script>
