<template>
  <section id="projects" class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center text-navy-500">
        Featured Projects
      </h2>
      <div ref="gridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          :class="[
            'bg-white border border-medium-gray p-8 shadow-md hover:shadow-xl rounded-[2px]',
            'transition-all duration-1000 md:duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          ]"
          :style="{
            transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
          }"
        >
          <h3 class="text-2xl font-bold mb-4 text-navy-500">{{ project.title }}</h3>
          <p class="text-text-gray mb-6 leading-relaxed">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            <TechBadge
              v-for="tag in project.tags"
              :key="tag"
              :tech="tag"
            />
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 transition-all duration-200 uppercase tracking-wider text-sm rounded-[2px]"
            >
              View on GitHub
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 transition-all duration-200 uppercase tracking-wider text-sm rounded-[2px]"
            >
              View Demo
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <NuxtLink
              v-if="!project.github && !project.demo && project.link"
              :to="project.link"
              class="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 transition-all duration-200 uppercase tracking-wider text-sm rounded-[2px]"
            >
              Learn More
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
            <span
              v-if="!project.github && !project.demo && !project.link"
              class="inline-flex items-center text-text-gray font-semibold px-6 py-3 text-sm"
            >
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import projects from '@/assets/data/projects.js'
import { useScrollAnimation } from '@/composables/useScrollAnimation.js'

const { elementRef: gridRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
</script>
