<template>
  <section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-navy-500">
        {{ contactData.title }}
      </h2>
      <p class="text-xl text-text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
        {{ contactData.description }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          v-for="link in contactData.links"
          :key="link.label"
          :href="link.url"
          :target="link.target"
          :rel="link.target === '_blank' ? 'noopener noreferrer' : undefined"
          class="inline-block bg-navy hover:bg-navy-500 text-white font-semibold px-10 py-4 transition-colors duration-200 uppercase tracking-wider text-sm rounded-[2px]"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import contactData from '@/assets/data/contact.js'
</script>
