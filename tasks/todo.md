# Todo List - Scroll to Job on Back Navigation

## Problem
When users navigate from the homepage to a work experience details page and then click "Back", they are returned to the top of the work experience section instead of the specific job they were viewing.

## Solution Plan
Implement scroll restoration by:
1. Adding unique IDs to each job card based on their slug
2. Updating the back button to navigate to the specific job's hash
3. Using browser's native hash navigation for smooth scrolling

This is the simplest approach - no JavaScript needed, just proper use of HTML IDs and hash navigation.

## Tasks
- [x] Add unique ID attribute to each job card in WorkExperience.vue (format: `work-{slug}`)
- [x] Update back button links in work/[slug].vue to navigate to `/#work-{slug}` instead of `/#work-experience`
- [x] Test navigation: click a job → view details → click back → verify scroll to that job

## Review

### Summary
Successfully implemented scroll restoration when navigating back from a work experience details page. When users click back, the page now scrolls directly to the specific job they were viewing instead of the top of the work experience section.

### Files Modified
1. **components/WorkExperience.vue:12** - Added unique ID to each job card
2. **pages/work/[slug].vue:6, 102** - Updated both back buttons to navigate to specific job hash

### Changes Made

**WorkExperience Component:**
- Added `:id="`work-${company.slug}`"` attribute to each job card container
- Each job now has a unique anchor point (e.g., `work-wheelsup`, `work-wework`)

**Work Details Page:**
- Updated top back button from `to="/#work-experience"` to `:to="`/#work-${slug}`"`
- Updated bottom back button from `to="/#work-experience"` to `:to="`/#work-${slug}`"`
- Both buttons now dynamically link to the specific job's anchor

**Result:**
- Users can now navigate back to the exact job they were viewing
- Browser's native hash navigation handles smooth scrolling
- No JavaScript state management needed - simple HTML/routing solution
- Minimal code changes with maximum UX improvement
