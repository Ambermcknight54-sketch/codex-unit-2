# Semantic HTML

title: "Semantic HTML"
date: "2026-04-17"
topicTags:

- html
- semantic
- accessibility
  prereqs:
- basic-html
  total_estimated_minutes: 60

## Overview

This instructor-facing lesson brief describes the goals and teaching sequence for a 60-minute lesson on Semantic HTML. The narrative below is written for human authors and instructors; a parallel machine-readable manifest (`lesson-plan.yaml`) will be generated from this brief for use by the engine and tests.

## Audience and purpose

This lesson targets beginners with basic HTML familiarity. It introduces semantic structure (headings, landmarks), grouping and lists, accessible images, inline code and preformatted blocks, and progressive disclosure with `details`/`summary`. The goal is for students to recognize and apply semantic elements to improve document structure and accessibility.

## Learning goals

- Understand the HTML document skeleton and the role of `title` and `meta` information.
- Use `h1`–`h6` to create a clear content hierarchy.
- Apply landmark elements (`header`, `nav`, `main`, `footer`, `section`, `article`) for structural clarity.
- Use lists and grouping elements (`ul`, `ol`, `li`, `section`, `article`) appropriately.
- Write useful `alt` attributes and use `figure`/`figcaption` for captioned media.
- Present code examples using `code` and `pre` and provide optional explanatory content with `details`/`summary`.

## Time and sequencing

The lesson is time-boxed to 60 minutes and is split into a small number of focused levels that each target a single learning goal. Each level contains a short instructor prompt, a starter snippet for students, and an assessment rubric.

## Level summaries

- Level 1 — Boilerplate & Document Structure: overview of `<!doctype html>`, `html`, `head`, `meta`, and `title`; where student work belongs.
- Level 2 — Headings & Outline: why `h1`–`h6` matter and how to build a clear outline.
- Level 3 — Landmark Elements: `header`, `nav`, `main`, `footer` and how they help navigation and accessibility.
- Level 4 — Lists: using `ul`/`ol`/`li` for related items and correct list semantics.
- Level 5 — Sections & Articles: using `section` and `article` to group content with headings and improve document structure.
- Level 6 — Images & Alt Text: writing descriptive `alt` attributes and using `figure`/`figcaption`.
- Level 7 — Inline Code & Preformatted Text: when to use `code` and when to use `pre` for longer code blocks.
- Level 8 — Progressive Disclosure: using `details`/`summary` for optional explanations while avoiding hiding essential content.
- Level 9 — Refactor Challenge: replace non-semantic `div`-based layout with semantic elements.
- Level 10 — Integration Challenge: build a short semantic page combining learned concepts.

## Instructor notes

- Keep starter snippets minimal and avoid including full reference solutions in student-visible files.
- Use the `lesson-plan.yaml` manifest to wire tests, hint tiers, and the precise per-level rubrics.
- After editing this brief, run the generator to update `lesson-plan.yaml` and validate budgets and prereqs.

## Operational requirements

The machine-readable `lesson-plan.yaml` must be produced by the generator from this human brief and must include the structured metadata the engine needs (levels, test paths, estimated minutes, concept keys, and hint policy). The engine will consume the YAML for test execution and scope updates. Manual edits to the YAML are allowed but authors should prefer editing the Markdown brief and re-generating to avoid drift.
