# Generational Challenges Page Overrides

> **PROJECT:** EXPRESS IT
> **Generated:** 2026-06-23 12:18:30
> **Page Type:** Blog / Article

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Page-Specific Rules

### Layout Overrides

- **Max Width:** 1200px (standard)
- **Layout:** Full-width sections, centered content
- **Sections:** 1. Intro hook, 2. Chapter 1 (problem), 3. Chapter 2 (journey), 4. Chapter 3 (solution), 5. Climax CTA

### Spacing Overrides

- No overrides — use Master spacing

### Typography Overrides

- No overrides — use Master typography

### Color Overrides

- **Strategy:** Progressive reveal. Each chapter has distinct color. Building intensity.

### Component Overrides

- Avoid: Force scroll effects
- Avoid: Ignore accessibility motion settings
- Avoid: Jump directly without transition

---

## Page-Specific Components

- No unique components for this page

---

## Recommendations

- Effects: Scroll anim (Intersection Observer), hover (300-400ms), entrance, parallax (3-5 layers), page transitions
- Accessibility: Respect prefers-reduced-motion
- Animation: Check prefers-reduced-motion media query
- Navigation: Use scroll-behavior: smooth on html element
- CTA Placement: End of each chapter (mini) + Final climax CTA
