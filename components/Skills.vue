<template>
  <section id="skills" class="py-24 px-4 sm:px-6 lg:px-8 bg-light-gray">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center text-navy-500">
        Skills & Expertise
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.title"
          class="p-8 bg-white border-l-4 border-t border-r border-b border-medium-gray shadow-md transition-all duration-200 hover:shadow-xl rounded-lg"
          :style="{ borderLeftColor: skill.color }"
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

const iconComponents = {
  Monitor,
  Server,
  Cloud,
  Database,
  ClipboardList,
  Users
}
</script>
