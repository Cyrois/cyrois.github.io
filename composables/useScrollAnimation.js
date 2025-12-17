import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Composable for scroll-based animations using IntersectionObserver
 * Supports both single element and multiple elements
 *
 * @param {number} options.threshold - Visibility threshold (0-1). Default: 0.2
 * @param {number} options.count - Number of elements to observe. Default: 1
 * @returns {Object} - { elementRef(s), isVisible }
 */
export function useScrollAnimation(options = {}) {
  const { threshold = 0.2, count = 1 } = options

  // For single element (backward compatible)
  if (count === 1) {
    const isVisible = ref(false)
    const elementRef = ref(null)
    let observer = null

    onMounted(() => {
      if (!elementRef.value) return

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold, rootMargin: '0px' }
      )

      observer.observe(elementRef.value)
    })

    onBeforeUnmount(() => {
      if (observer && elementRef.value) {
        observer.unobserve(elementRef.value)
      }
    })

    return { elementRef, isVisible }
  }

  // For multiple elements
  const elementRefs = ref([])
  const isVisibleArray = ref(Array(count).fill(false))
  let observers = []

  onMounted(() => {
    elementRefs.value.forEach((el, index) => {
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisibleArray.value[index] = true
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold, rootMargin: '0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })
  })

  onBeforeUnmount(() => {
    observers.forEach(observer => observer.disconnect())
  })

  return {
    elementRefs,
    isVisibleArray
  }
}
