# Task: Change Button and Card Rounding to rounded-[2px]

## Plan

### Background
Currently, buttons and cards use `rounded-lg` class. The user wants to change all of them to use `rounded-[2px]` (Tailwind arbitrary value) for more explicit control. Badges with `rounded-full` should remain unchanged.

### Goal
Replace all `rounded-lg` instances on buttons and cards with `rounded-[2px]`.

### Affected Files
1. `components/Navigation.vue` - Desktop Contact button, mobile Contact button, mobile menu button
2. `components/Contact.vue` - Contact link buttons
3. `components/Hero.vue` - CTA button
4. `components/Projects.vue` - Project cards and action buttons
5. `components/Skills.vue` - Skill cards
6. `components/WorkExperience.vue` - Experience cards and "Learn More" button
7. `pages/work/[slug].vue` - Back to Portfolio buttons
8. `pages/projects/[slug].vue` - All action buttons

### Implementation Steps

- [x] Update Navigation.vue buttons from rounded-lg to rounded-[2px]
- [x] Update Contact.vue buttons from rounded-lg to rounded-[2px]
- [x] Update Hero.vue button from rounded-lg to rounded-[2px]
- [x] Update Projects.vue cards and buttons from rounded-lg to rounded-[2px]
- [x] Update Skills.vue cards from rounded-lg to rounded-[2px]
- [x] Update WorkExperience.vue cards and button from rounded-lg to rounded-[2px]
- [x] Update pages/work/[slug].vue buttons from rounded-lg to rounded-[2px]
- [x] Update pages/projects/[slug].vue buttons from rounded-lg to rounded-[2px]

## Review

### Summary
Successfully replaced all `rounded-lg` and `rounded-md` classes with `rounded-[2px]` for all buttons and cards across the site. Badges with `rounded-full` remain unchanged.

### Changes Made

1. **components/Navigation.vue**
   - Line 62: Desktop Contact button from `rounded-lg` to `rounded-[2px]`
   - Line 75: Mobile menu button from `rounded-lg` to `rounded-[2px]`
   - Line 97: Mobile Contact button from `rounded-lg` to `rounded-[2px]`

2. **components/Contact.vue**
   - Line 17: Contact link buttons from `rounded-lg` to `rounded-[2px]`

3. **components/Hero.vue**
   - Line 19: CTA button from `rounded-lg` to `rounded-[2px]`

4. **components/Projects.vue**
   - Line 11: Project cards from `rounded-lg` to `rounded-[2px]`
   - Lines 36, 48, 58: All project action buttons from `rounded-lg` to `rounded-[2px]`

5. **components/Skills.vue**
   - Line 11: Skill cards from `rounded-lg` to `rounded-[2px]`

6. **components/WorkExperience.vue**
   - Line 13: Experience cards from `rounded-lg` to `rounded-[2px]`
   - Line 57: "Learn More" button from `rounded-lg` to `rounded-[2px]`

7. **pages/work/[slug].vue**
   - Lines 97, 113: Back to Portfolio buttons from `rounded-lg` and `rounded-md` to `rounded-[2px]`

8. **pages/projects/[slug].vue**
   - Lines 101, 113, 127, 143: All action buttons from `rounded-lg` and `rounded-md` to `rounded-[2px]`

### Impact
- All buttons and cards now have explicit 2px border radius using Tailwind arbitrary value syntax
- Consistent styling across the entire site
- Badges with `rounded-full` remain unchanged as intended
- Total: 8 files modified, ~20 instances updated
- Clean, minimal changes focused only on rounding values
