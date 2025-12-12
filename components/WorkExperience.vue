<template>
  <section id="work-experience" class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center text-navy-500">
        Work Experience
      </h2>

      <div class="space-y-12">
        <div
          v-for="(company, index) in companies"
          :key="index"
          :id="`work-${company.slug}`"
          class="bg-white border border-medium-gray shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg"
        >
          <div class="flex flex-col md:flex-row" :class="{ 'md:flex-row-reverse': index % 2 === 1 }">
            <!-- Image Section -->
            <div class="md:w-2/5">
              <img
                v-if="company.images && company.images.length > 0"
                :src="company.images[0]"
                :alt="company.name"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Content Section -->
            <div class="md:w-3/5 p-10">
              <div class="mb-6">
                <h3 class="text-2xl sm:text-3xl font-bold mb-2 text-navy-500">{{ company.name }}</h3>
                <p class="text-lg mb-2 font-semibold text-text-dark">{{ company.role }}</p>
                <p class="text-sm text-text-gray">{{ company.duration }} • {{ company.location }}</p>
              </div>

              <p class="text-text-gray mb-6 leading-relaxed text-lg">
                {{ company.description }}
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
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

              <div>
                <a
                  :href="company.link"
                  class="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 transition-all duration-200 uppercase tracking-wider text-sm rounded-md"
                >
                  Learn More
                  <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import companies from '@/assets/data/workExperience.js'
import { getTechColor } from '@/utils/skillColors.js'
</script>
