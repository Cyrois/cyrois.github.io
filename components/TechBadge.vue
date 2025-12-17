<template>
  <span
    class="text-sm px-4 py-2 border-2 font-medium rounded-full"
    :style="{
      color: getTechColor(tech),
      borderColor: getTechColor(tech),
      backgroundColor: getTechColor(tech) + '20'
    }"
  >
    {{ tech }}
  </span>
</template>

<script setup>
import { getTechColor } from '@/utils/skillColors.js'

defineProps({
  tech: {
    type: String,
    required: true
  }
})
</script>
