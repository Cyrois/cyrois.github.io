# Task: Make Card Panels Stand Out More

## Analysis
Currently, card panels use:
- White backgrounds (`bg-white`)
- Very subtle borders (`border-medium-gray` = `#E5E9F0`)
- Shadows only on hover
- Sitting on white or light-gray backgrounds

The cards blend in too much with the background, making them hard to distinguish.

## Plan

### Todo Items
- [x] Add subtle default shadow to all card components
- [x] Strengthen hover shadow for better interaction feedback
- [x] Test visual improvements across all card components

### Files to Modify
1. `components/Projects.vue` - Project cards (line 11)
2. `components/WorkExperience.vue` - Work experience cards (line 13)
3. `components/Skills.vue` - Skills cards (line 11)
4. `components/About.vue` - Stats cards (line 13)

### Approach
- Add `shadow-md` class for default subtle shadow (gives depth)
- Change hover shadow from `hover:shadow-lg` to `hover:shadow-xl` for better contrast
- Keep current border styling - the shadow will provide the needed definition

This is a simple, minimal change that only impacts card styling - no structural changes needed.

---

## Review

### Summary
Successfully improved card visibility by adding default shadows to all card components across the site.

### Changes Made
1. **Projects.vue** - Added `shadow-md` to project cards, upgraded hover to `shadow-xl`
2. **WorkExperience.vue** - Added `shadow-md` to work experience cards, upgraded hover to `shadow-xl`
3. **Skills.vue** - Added `shadow-md` to skills cards, upgraded hover to `shadow-xl`
4. **About.vue** - Added `shadow-md` to stats cards

### Impact
- Cards now have visible depth and stand out against white/light-gray backgrounds
- Default shadow (`shadow-md`) provides subtle elevation
- Hover effect (`shadow-xl`) creates better interaction feedback
- Minimal code changes - only modified shadow classes
- No structural or functional changes
- All cards maintain their existing styling and behavior
