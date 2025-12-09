<template>
  <div v-if="images && images.length > 0" class="relative w-full">
    <!-- Main carousel container -->
    <div class="relative w-full bg-[#1a1f2e] rounded-lg overflow-hidden">
      <!-- Images container with slides -->
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="min-w-full aspect-video"
        >
          <img
            :src="image"
            :alt="`Slide ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Navigation buttons (desktop only) -->
      <button
        v-if="images.length > 1"
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full hidden md:block transition-all duration-200"
        aria-label="Previous image"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        v-if="images.length > 1"
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full hidden md:block transition-all duration-200"
        aria-label="Next image"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Image counter -->
      <div
        v-if="images.length > 1"
        class="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full text-sm text-white"
      >
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>

      <!-- Dot indicators -->
      <div
        v-if="images.length > 1"
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
      >
        <button
          v-for="(_, index) in images"
          :key="index"
          @click="goToSlide(index)"
          :class="index === currentIndex ? 'bg-white' : 'bg-white/40'"
          class="w-2 h-2 rounded-full transition-all duration-200"
          :aria-label="`Go to slide ${index + 1}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)
const isTransitioning = ref(false)

// Navigate to next slide
const nextSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentIndex.value = (currentIndex.value + 1) % props.images.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 300)
}

// Navigate to previous slide
const prevSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 300)
}

// Navigate to specific slide
const goToSlide = (index) => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentIndex.value = index
  setTimeout(() => {
    isTransitioning.value = false
  }, 300)
}

// Handle touch start
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
}

// Handle touch end and detect swipe
const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].clientX
  handleSwipe()
}

// Detect swipe direction
const handleSwipe = () => {
  const swipeThreshold = 50 // minimum swipe distance in pixels
  const diff = touchStartX.value - touchEndX.value

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide() // Swiped left, go to next
    } else {
      prevSlide() // Swiped right, go to previous
    }
  }
}

// Handle keyboard navigation
const handleKeydown = (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide()
  } else if (e.key === 'ArrowRight') {
    nextSlide()
  }
}

// Add keyboard event listener on mount
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

// Remove keyboard event listener on unmount
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
