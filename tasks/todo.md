# Remove teamSize Property

## Problem
The `teamSize` property exists in the work experience data but is set to `null` for all entries and is conditionally displayed in the UI. This unused property should be removed to simplify the codebase.

## Analysis
- **assets/data/workExperience.js**: All 4 work experience entries have `teamSize: null` (lines 26, 61, 96, 130)
- **pages/work/[slug].vue**: Line 36 displays teamSize conditionally with `v-if="company.teamSize"`

## Plan
- [x] Remove `teamSize: null` from all work experience entries in `assets/data/workExperience.js`
- [x] Remove the teamSize display line from `pages/work/[slug].vue`

## Review

### Summary of Changes
Successfully removed the unused `teamSize` property from the codebase.

### Files Modified
1. **assets/data/workExperience.js** - Removed 4 instances of `teamSize: null`
2. **pages/work/[slug].vue** - Removed the conditional teamSize display line

### Changes Made
- Removed `teamSize: null,` from all 4 work experience entries (Shambhala, Vass, Moola, TuGo)
- Removed `<p v-if="company.teamSize" class="text-text-gray">Team Size: {{ company.teamSize }}</p>` from the work detail page template

### Impact
- Cleaner data structure with no unused properties
- Simplified UI template by removing unnecessary conditional rendering
- Total of 5 lines removed across 2 files
- No visual changes to the site since teamSize was never displayed (always null)
