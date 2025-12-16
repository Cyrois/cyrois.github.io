# Slow Down Animations on Mobile

## Goal
Make all scroll animations slower on mobile devices for better user experience.

## Current State
- All animations use 700ms duration (800ms for About text)
- Same duration across all screen sizes

## Plan

### Implementation Steps
- [x] Update About section animations to be slower on mobile
- [x] Update Skills section animations to be slower on mobile
- [x] Update Projects section animations to be slower on mobile
- [x] Update Work Experience section animations to be slower on mobile

### Implementation Details
- Use Tailwind's responsive duration classes
- Mobile: 1000ms duration
- Desktop (md and up): Keep original durations (700ms/800ms)

## Review

### Summary
Successfully slowed down all animations on mobile devices using Tailwind's responsive classes. All animations now take 1000ms on mobile and revert to their original speeds (700ms/800ms) on desktop.

### Changes Made
1. **components/About.vue**
   - Stats: `duration-700` → `duration-1000 md:duration-700`
   - Text: `duration-800` → `duration-1000 md:duration-800`

2. **components/Skills.vue**
   - Skill tiles: `duration-700` → `duration-1000 md:duration-700`

3. **components/Projects.vue**
   - Project cards: `duration-700` → `duration-1000 md:duration-700`

4. **components/WorkExperience.vue**
   - Work panels: `duration-700` → `duration-1000 md:duration-700`

### Implementation Approach
- Used Tailwind's responsive modifiers (md:) to apply different durations
- Mobile (< 768px): 1000ms animations for smoother, more visible transitions
- Desktop (≥ 768px): Original durations for snappier feel
- Consistent 1000ms on mobile across all sections for cohesive experience
- Minimal code changes - only updated duration classes

---

# Add Animations to Projects Section

## Goal
Add scroll animations to the Projects section:
- Project cards fade in one by one with staggered delays (same as Skills section)

## Current State
- Projects.vue component has project cards in a grid
- No animations currently applied

## Plan

### Implementation Steps
- [x] Add IntersectionObserver to Projects.vue for each project card
- [x] Add CSS transition classes for fade-in animation with slide-up
- [x] Apply staggered delays (100ms between each card)
- [x] Keep consistent timing with Skills section (700ms duration)
- [x] Fix animation trigger to observe grid container instead of individual cards

### Implementation Details
- Will modify `/Users/cchan/Documents/personal/personal_site/components/Projects.vue`
- Use IntersectionObserver to detect when cards are visible
- Add opacity and transform transitions with staggered delays
- Minimal code changes - only add animations to existing elements

## Review

### Summary
Successfully added scroll-triggered fade-in animations to the Projects section. Each project card fades in one by one with a 100ms staggered delay, identical to the Skills section.

### Changes Made
1. **components/Projects.vue**
   - Added IntersectionObserver to track visibility of the grid container (not individual cards)
   - Created `gridRef` to reference the grid container
   - Created `isVisible` boolean to track when grid becomes visible
   - Added fade and slide-up animation: `opacity-0 translate-y-4` → `opacity-100 translate-y-0`
   - Applied staggered transition delay: 100ms between each card
   - Set transition duration to 700ms (consistent with Skills section)
   - Kept existing hover shadow effect intact
   - Grid triggers when 10% visible (threshold: 0.1)

### Implementation Approach
- Used single IntersectionObserver on grid container instead of individual cards
- When grid becomes visible, all cards start animating with staggered delays
- This ensures the cascade effect works even for cards not yet in viewport
- Staggered delays create a cascading fade-in effect (100ms between each card)
- Combined with slight upward movement (translate-y-4) for dynamic effect
- Once grid becomes visible, observer stops watching
- Minimal code impact - only modified Projects.vue component
- Identical animation pattern to Skills section for consistency

---

# Add Animations to Work Experience Section

## Goal
Add scroll animations to the Work Experience section:
- Work experience panels alternate sliding in from left and right
- Even panels (0, 2, 4...) slide in from the left
- Odd panels (1, 3, 5...) slide in from the right

## Current State
- WorkExperience.vue component has work experience panels
- Panels already alternate their layout (flex-row-reverse for odd indices)
- No animations currently applied

## Plan

### Implementation Steps
- [x] Add IntersectionObserver to WorkExperience.vue for each panel
- [x] Add CSS transition classes for slide-in animations (left and right)
- [x] Apply animation classes conditionally based on index and visibility
- [x] Keep consistent timing with other sections (700ms duration)

### Implementation Details
- Will modify `/Users/cchan/Documents/personal/personal_site/components/WorkExperience.vue`
- Use IntersectionObserver to detect when each panel is visible
- Add transform and opacity transitions
- Alternate slide direction based on index (even = left, odd = right)
- Minimal code changes - only add animations to existing elements

## Review

### Summary
Successfully added scroll-triggered animations to the Work Experience section. Panels alternate sliding in from left (even) and right (odd), matching their already-alternating layout.

### Changes Made
1. **components/WorkExperience.vue**
   - Added IntersectionObserver setup to track visibility of each work experience panel
   - Created `panelRefs` array to hold refs for all panels
   - Created `panelVisible` array to track visibility state of each panel
   - Added slide-in animations based on index:
     - Even panels (0, 2, 4...): slide from `-translate-x-12` to `translate-x-0`
     - Odd panels (1, 3, 5...): slide from `translate-x-12` to `translate-x-0`
   - All panels fade in: `opacity-0` → `opacity-100`
   - Used 700ms duration with ease-out timing (consistent with other sections)
   - Kept existing hover shadow effect intact
   - All panels trigger when 20% visible (threshold: 0.2)

### Implementation Approach
- Used IntersectionObserver for each panel to track when it becomes visible
- Alternating slide direction matches the existing alternating layout (flex-row-reverse)
- Consistent 700ms duration provides smooth, cohesive animations across the site
- Once panels become visible, observers stop watching to prevent re-triggering
- Minimal code impact - only modified WorkExperience.vue component

---

# Add Animations to Skills Section

## Goal
Add scroll animations to the Skills section:
- Skills tiles fade in one by one with a staggered delay

## Current State
- Skills.vue component has 6 skill tiles in a grid
- No animations currently applied

## Plan

### Implementation Steps
- [x] Add IntersectionObserver to Skills.vue for the skill tiles
- [x] Add CSS transition classes for fade-in animation
- [x] Apply staggered delays so tiles fade in one by one (e.g., 100ms delay between each)
- [x] Apply animation classes conditionally based on visibility state
- [x] Fix animation trigger to observe grid container instead of individual tiles

### Implementation Details
- Will modify `/Users/cchan/Documents/personal/personal_site/components/Skills.vue`
- Use IntersectionObserver to detect when section is visible
- Add opacity transition with staggered delays for each tile
- Keep animations simple and smooth (~500-600ms duration)
- Minimal code changes - only add animations to existing elements

## Review

### Summary
Successfully added scroll-triggered fade-in animations to the Skills section. Each skill tile fades in one by one with a 100ms staggered delay between them.

### Changes Made
1. **components/Skills.vue**
   - Added IntersectionObserver to track visibility of the grid container (not individual tiles)
   - Created `gridRef` to reference the grid container
   - Created `isVisible` boolean to track when grid becomes visible
   - Added fade and slide-up animation: `opacity-0 translate-y-4` → `opacity-100 translate-y-0`
   - Applied staggered transition delay: 0ms, 100ms, 200ms, 300ms, 400ms, 500ms for tiles 1-6
   - Set transition duration to 700ms for smooth, slower fade effect
   - Kept existing hover shadow effect intact
   - Grid triggers when 10% visible (threshold: 0.1)

### Implementation Approach
- Used single IntersectionObserver on grid container instead of individual tiles
- When grid becomes visible, all tiles start animating with staggered delays
- This ensures the cascade effect works even for tiles not yet in viewport (like the second row)
- Staggered delays create a cascading fade-in effect (100ms between each tile)
- Combined with slight upward movement (translate-y-4) for more dynamic effect
- Once grid becomes visible, observer stops watching
- Minimal code impact - only modified Skills.vue component

---

# Add Animations to About Section

## Goal
Add scroll animations to the About section:
- Left stat slides in from the left
- Right stat slides in from the right
- Text paragraphs fade in

## Current State
- About.vue component has 2 stats in a grid and text paragraphs below
- useScrollAnimation composable already exists and uses IntersectionObserver
- No animations currently applied

## Plan

### Implementation Steps
- [x] Add useScrollAnimation to About.vue for each stat and text section
- [x] Add CSS transition classes for slide-in animations (left and right)
- [x] Add CSS transition classes for fade-in animation
- [x] Apply animation classes conditionally based on visibility state

### Implementation Details
- Will modify `/Users/cchan/Documents/personal/personal_site/components/About.vue`
- Use existing useScrollAnimation composable (no changes needed to composable)
- Add simple CSS transitions with transform and opacity
- Keep animations subtle and smooth (0.6-0.8s duration)
- Minimal code changes - only add animations to existing elements

## Review

### Summary
Successfully added scroll-triggered animations to the About section. Left stat slides in from the left, right stat slides in from the right, and text fades in.

### Changes Made
1. **components/About.vue**
   - Added IntersectionObserver setup in script section to track visibility of stats and text
   - Created `statRefs` array to hold refs for both stat cards
   - Created `statVisible` array to track visibility state of each stat
   - Created `textRef` and `textVisible` for the text section
   - Added CSS transitions with `duration-700 ease-out` for smooth animations
   - Left stat (index 0): slides from `-translate-x-12` to `translate-x-0`
   - Right stat (index 1): slides from `translate-x-12` to `translate-x-0`
   - Text section: fades from `opacity-0` to `opacity-100`
   - All elements trigger when 20% visible (threshold: 0.2)

### Implementation Approach
- Used IntersectionObserver directly in the component instead of the existing composable for more control
- Kept animations simple with only transform and opacity changes
- 700ms duration provides smooth, noticeable animations without being too slow
- Once elements become visible, observers stop watching to prevent re-triggering
- Minimal code impact - only modified About.vue component
