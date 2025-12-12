<template>
  <div class="min-h-screen pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
    <div v-if="project" class="max-w-4xl mx-auto">
      <!-- Back Button -->
      <NuxtLink
        to="/#projects"
        class="inline-flex items-center text-text-gray hover:text-navy transition-colors duration-200 mb-8"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </NuxtLink>

      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4 text-navy">
          {{ project.title }}
        </h1>
        <p class="text-xl text-text-gray">{{ project.description }}</p>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-navy">Overview</h2>
        <div class="space-y-4 text-lg text-text-gray leading-relaxed">
          <p v-for="(paragraph, index) in project.detailedDescription" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </section>

      <!-- Image Carousel -->
      <section v-if="project.images && project.images.length > 0" class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-navy">Project Gallery</h2>
        <ImageCarousel :images="project.images" />
      </section>

      <!-- Challenges -->
      <section v-if="project.challenges && project.challenges.length > 0" class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-navy">Challenges</h2>
        <ul class="space-y-3">
          <li
            v-for="(challenge, index) in project.challenges"
            :key="index"
            class="flex items-start"
          >
            <svg class="w-6 h-6 text-navy mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <span class="text-text-gray text-lg">{{ challenge }}</span>
          </li>
        </ul>
      </section>

      <!-- Results -->
      <section v-if="project.results && project.results.length > 0" class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-navy">Results</h2>
        <ul class="space-y-3">
          <li
            v-for="(result, index) in project.results"
            :key="index"
            class="flex items-start"
          >
            <svg class="w-6 h-6 text-navy mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-text-gray text-lg">{{ result }}</span>
          </li>
        </ul>
      </section>

      <!-- Technologies -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-navy">Technologies Used</h2>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="text-sm px-4 py-2 border-2 font-medium rounded-full"
            :style="{
              color: getTechColor(tag),
              borderColor: getTechColor(tag),
              backgroundColor: getTechColor(tag) + '20'
            }"
          >
            {{ tag }}
          </span>
        </div>
      </section>

      <!-- Links (if available) -->
      <section v-if="project.github || project.demo" class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-navy">Links</h2>
        <div class="flex flex-wrap gap-4">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 transition-all duration-200 uppercase tracking-wider text-sm rounded-[2px]"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 transition-all duration-200 uppercase tracking-wider text-sm rounded-[2px]"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </section>

      <!-- Back Button Bottom -->
      <div class="mt-16 pt-8 border-t border-medium-gray">
        <NuxtLink
          to="/#projects"
          class="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-[2px] transition-all duration-200 uppercase tracking-wider text-sm"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </NuxtLink>
      </div>
    </div>

    <!-- 404 Not Found -->
    <div v-else class="max-w-4xl mx-auto text-center py-20">
      <h1 class="text-5xl font-bold mb-6 text-navy">Project Not Found</h1>
      <p class="text-xl text-text-gray mb-8">Sorry, we couldn't find the project you're looking for.</p>
      <NuxtLink
        to="/#projects"
        class="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-[2px] transition-all duration-200"
      >
        Return to Portfolio
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import projects from '@/assets/data/projects.js'
import ImageCarousel from '@/components/ImageCarousel.vue'
import { getTechColor } from '@/utils/skillColors.js'

const route = useRoute()
const slug = route.params.slug

const project = computed(() => projects.find(p => p.slug === slug))

// Set page title
useHead({
  title: project.value ? `${project.value.title} - Projects` : 'Project Not Found'
})
</script>
