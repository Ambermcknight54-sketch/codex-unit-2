---
title: "CSS Box Model"
slug: "lesson-03-box-model"
topicTags:
  - css
  - html
  - layout
total_estimated_minutes: 60
max_levels: 15
concepts:
  - box model fundamentals
  - content / padding / border / margin
  - visualizing box model with HTML/CSS
  - default (user-agent) styles and their effects
  - inline vs block flow
  - box-sizing and layout implications
---

## Overview

This lesson teaches the HTML/CSS box model: the four box layers (content, padding, border, margin), how browsers apply default styles that affect sizing, and the differences between inline and block-level elements. Students will learn to visualize the box model with simple HTML/CSS, manipulate spacing, and apply `box-sizing` for predictable layouts.

## Learning Goals

- Understand and name the four parts of the box model.
- Use CSS to visually highlight `content`, `padding`, `border`, and `margin`.
- Recognize and override default user-agent styles that affect sizing.
- Explain and demonstrate the differences between `inline`, `block`, and `inline-block` elements.
- Apply `box-sizing` to manage width/height calculations in responsive layouts.

## Levels

### Level 01 — Intro to the Box Model

- Estimated minutes: 8
- Difficulty: 1
- Type: guided
- Objective: Explain content, padding, border, and margin and how they compose a box.
- Rubric:
  - Pass: Correctly identifies all four layers and sketches or describes their stacking order.
  - Partial: Names most layers but misses one or mix-ups behavior.
  - Fail: Cannot describe the layers or their roles.

### Level 02 — Visualize with HTML/CSS

- Estimated minutes: 10
- Difficulty: 2
- Type: guided
- Tests required: true
- Objective: Build a minimal page that visually highlights content, padding, border, and margin using distinct colors and borders.
- Activities: Create nested elements or use CSS outlines/backgrounds to show each layer; inspect computed styles in devtools.
- Rubric:
  - Pass: Each layer is visually distinct and inspectable via devtools.
  - Partial: Some layers shown but one or more are unclear.
  - Fail: No clear visualization produced.

### Level 03 — Padding / Border / Margin Deep Dive

- Estimated minutes: 8
- Difficulty: 2
- Type: practice
- Tests required: true
- Objective: Change padding, border, and margin values to observe layout shifts and spacing effects.
- Activities: Toggle values, observe element offsets, and document how each change affects surrounding flow.
- Rubric:
  - Pass: Correctly demonstrates how each property changes spacing and flow.
  - Partial: Demonstrates one property correctly.
  - Fail: Changes do not affect layout or are misinterpreted.

### Level 04 — Default Element Styles

- Estimated minutes: 7
- Difficulty: 2
- Type: guided
- Tests required: true
- Objective: Explore common user-agent defaults (e.g., margins on `h1`, `p`) and how to override them.
- Activities: View computed styles, apply resets/overrides, and explain the visual differences.
- Rubric:
  - Pass: Identifies defaults and overrides them cleanly.
  - Partial: Overrides without clear explanation.
  - Fail: Unable to locate or change defaults.

### Level 05 — Inline vs Block Elements

- Estimated minutes: 8
- Difficulty: 2
- Type: guided
- Tests required: true
- Objective: Compare `display` types (`inline`, `block`, `inline-block`) and demonstrate how width/height/padding behave for each.
- Activities: Convert elements between display types, measure effects on layout and flow.
- Rubric:
  - Pass: Explains differences and shows working examples.
  - Partial: Demonstrates only one concept correctly.
  - Fail: Mixes up behaviors or produces broken examples.

### Level 06 — Combining Layout Rules

- Estimated minutes: 7
- Difficulty: 3
- Type: practice
- Tests required: true
- Objective: Use width, margin, `inline-block` (or floats) to compose a simple 2-column layout while reasoning about the box model.
- Rubric:
  - Pass: Produces a stable two-column layout and explains spacing decisions.
  - Partial: Layout approximates target but relies on fragile hacks.
  - Fail: Layout collapses or elements overlap incorrectly.

### Level 07 — Box-Sizing & Responsive Considerations

- Estimated minutes: 7
- Difficulty: 3
- Type: practice
- Tests required: true
- Objective: Compare `box-sizing: content-box` vs `box-sizing: border-box` and apply the proper model for responsive sizing.
- Activities: Toggle `box-sizing` and show width/height differences; adopt `*, *::before, *::after { box-sizing: border-box }` pattern.
- Rubric:
  - Pass: Demonstrates differences and applies `border-box` for predictable sizing.
  - Partial: Toggles without full explanation.
  - Fail: No meaningful comparison.

### Level 08 — Practice: Debug & Build (Guided practice)

- Estimated minutes: 3
- Difficulty: 3
- Type: practice
- Tests required: true
- Objective: Work through a guided, partially-complete mockup to fix spacing issues and learn to compute total element width (content + padding + border + margin).
- Activities: Follow incremental hints to adjust `box-sizing`, padding, and margins so elements stop overflowing.
- Rubric:
  - Pass: Correctly adjusts box-sizing or spacing to prevent overflow and explains the change.
  - Partial: Fixes overflow but with fragile or unclear choices.
  - Fail: Changes do not fix overflow or introduce regressions.

### Level 09 — Challenge: Debug & Build (Unguided)

- Estimated minutes: 2
- Difficulty: 4
- Type: challenge
- Tests required: true
- Objective: Given a small broken mockup without step-by-step hints, diagnose and fix spacing/overflow issues using box model knowledge and optional resets.
- Activities: Independently reason about combined widths and apply `box-sizing`, padding/border adjustments, or margin changes to match the intended layout.
- Rubric:
  - Pass: Fixes spacing and overflow; layout matches the mockup intent.
  - Partial: Fixes some issues but not all.
  - Fail: Changes do not improve or break layout further.

## Assessment & Testing Notes

- Tests should be lightweight and fast (Vitest + JSDOM): assert computed styles, dimensions, and presence/absence of classes rather than pixel-perfect rendering.
- Each `tests_required: true` level should have a corresponding test file path in the lesson manifest (e.g. `.engine/tests/lesson-03-level-02.test.ts`).

## Instructor Notes & Extensions

- Optional topics to include or split into later lessons:
  - Margin collapsing and vertical spacing edge cases.
  - `overflow`, clipping, and scroll behaviors.
  - Using devtools to inspect box model metrics.
  - Quick intro to layout systems (Flexbox / Grid) as follow-ups.
  - Accessibility implications when changing `display` and semantics.

---

Instructor-review draft. Do not add student-facing solutions to level folders.
