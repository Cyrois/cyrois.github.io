<template>
  <div class="min-h-screen pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
    <div v-if="company" class="max-w-4xl mx-auto">
      <!-- Back Button -->
      <NuxtLink
        :to="`/#work-${slug}`"
        class="inline-flex items-center text-text-gray hover:text-navy transition-colors duration-200 mb-8"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Work Experience
      </NuxtLink>

      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6 text-navy">
          {{ company.name }}
        </h1>
        <div class="flex gap-6">
          <img
            v-if="company.images && company.images.length > 0"
            :src="company.images[0]"
            :alt="company.name"
            loading="lazy"
            class="md:hidden w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-md object-cover flex-shrink-0"
          />
          <div class="flex-1">
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg mb-4">
              <span class="text-text-dark font-semibold">{{ company.role }}</span>
              <span class="hidden sm:inline text-medium-gray">•</span>
              <span class="text-text-gray">{{ company.duration }}</span>
              <span class="hidden sm:inline text-medium-gray">•</span>
              <span class="text-text-gray">{{ company.location }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-navy">Overview</h2>
        <div class="text-lg text-text-gray leading-relaxed">
          <img
            v-if="company.images && company.images.length > 0"
            :src="company.images[0]"
            :alt="company.name"
            loading="lazy"
            class="hidden md:block float-left mr-6 mb-4 w-48 rounded-lg shadow-md"
          />
          <p v-for="(paragraph, index) in company.detailedDescription" :key="index" class="mb-4">
            {{ paragraph }}
          </p>
        </div>
      </section>

      <!-- Technologies -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-navy">Technologies Used</h2>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="tech in company.technologies"
            :key="tech"
            class="text-sm px-4 py-2 border-2 font-medium rounded-full"
            :style="{
              color: getTechColor(tech),
              borderColor: getTechColor(tech),
              backgroundColor: getTechColor(tech) + '20'
            }"
          >
            {{ tech }}
          </span>
        </div>
      </section>

      <!-- Key Achievements -->
      <section v-if="company.achievements && company.achievements.length > 0" class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-navy">Key Tasks/Achievements</h2>
        <ul class="space-y-3">
          <li
            v-for="(achievement, index) in company.achievements"
            :key="index"
            class="flex items-start"
          >
            <svg class="w-6 h-6 text-navy mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-text-gray text-lg">{{ achievement }}</span>
          </li>
        </ul>
      </section>

      <!-- Back Button Bottom -->
      <div class="mt-16 pt-8 border-t border-medium-gray">
        <NuxtLink
          :to="`/#work-${slug}`"
          class="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 uppercase tracking-wider text-sm"
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
      <h1 class="text-5xl font-bold mb-6 text-navy">Work Experience Not Found</h1>
      <p class="text-xl text-text-gray mb-8">Sorry, we couldn't find the work experience you're looking for.</p>
      <NuxtLink
        to="/#work-experience"
        class="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-md transition-all duration-200"
      >
        Return to Portfolio
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import companies from '@/assets/data/workExperience.js'
import ImageCarousel from '@/components/ImageCarousel.vue'
import { getTechColor } from '@/utils/skillColors.js'

const route = useRoute()
const slug = route.params.slug

const company = computed(() => companies.find(c => c.slug === slug))

// Set page title
useHead({
  title: company.value ? `${company.value.name} - Work Experience` : 'Work Experience Not Found'
})
</script>
