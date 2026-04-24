---
title: "Lesson 02 — HTML Forms"
date: 2026-04-19
topicTags: [html, forms, inputs, accessibility]
prereqs: [boilerplate, semantic-headings]
total_estimated_minutes: 55
max_levels: 20
scope_updates: [forms.structure, forms.inputs, forms.labels, forms.validation]
tests_runtime_limit_ms: 500
hint_policy:
  tiers: 3
  reveal_solution_on_pass: false
  allow_code_snippets_in_hints: false
---

# Lesson 02 — HTML Forms

## Overview

This lesson introduces students to HTML forms: how to structure forms, use common input types, label fields accessibly, and perform basic form validation attributes. Students will build a simple contact form and progressively improve its semantics and accessibility.

## Learning objectives

- Identify and add the basic form structure (`<form>`).
- Review previously learned simple controls from Unit 1: text input, `textarea`, `range` (slider), and the file picker `input type="file"`.
- Use common form controls: `input` (text, email, password, checkbox, radio), `textarea`, `select`, and `button`.
- Associate `label` elements to form controls for accessibility, including explicit labeling using the `for` attribute (which references an input's `id`); note that `for`/`id` can be omitted when the input element is nested inside the `label`.
- Apply basic validation attributes (`required`, `type`, `minlength`, `maxlength`, range `min`, range `max`).

## Target audience & prerequisites

This lesson is for beginners who completed the boilerplate and semantic headings lessons. Students should be comfortable editing `index.html`, basic element nesting, and familiar with simple controls from Unit 1 (text input and `textarea`).

## Estimated time & level plan

- Total lesson time: 55 minutes
- Recommended levels (editable):
  1. Guided — Intro & boilerplate (5m)
  2. Guided — Name & email inputs (5m) <-- includes review of Unit 1 text input usage
  3. Guided — Message field & submit control (5m) <-- reviews Unit 1 `textarea` usage
  4. Practice — Input types (`email`, `tel`, `password`, `number`, `range` (slider), `file`) (6m)
  5. Guided — `select`, `optgroup`, and options (5m)
  6. Practice — Radio groups and checkboxes (5m)
  7. Guided — Labels & accessibility (6m)
  8. Guided — Grouping with `fieldset`/`legend` (4m)
  9. Guided — Basic validation attributes (`required`, `minlength`, `maxlength`, `min`, `max`) (6m)
  10. Practice — Debugging & Fixing Common Mistakes (6m)
  11. Challenge — Integrate & polish; accessibility checklist (2m)

## Concepts

```yaml
concepts:
  - name: "form-structure"
    key: "forms.structure"
    complexity: 1
    estimated_minutes: 10
    prereqs: []
    assessed: true
  - name: "input-types"
    key: "forms.inputs"
    complexity: 2
    estimated_minutes: 12
    prereqs: ["forms.structure"]
    assessed: true
  - name: "labels-accessibility"
    key: "forms.labels"
    complexity: 2
    estimated_minutes: 10
    prereqs: ["forms.structure"]
    assessed: true
  - name: "validation-attributes"
    key: "forms.validation"
    complexity: 2
    estimated_minutes: 10
    prereqs: ["forms.inputs"]
    assessed: true
```

## Level summaries (author editable)

- Level 1 (guided): "Intro & Boilerplate" — Objective: Add the basic form structure: a `<form>` element containing at least one `<input>` and a submit `<button>`, and include `<!-- TODO -->` placeholders in `index.html`. Estimated 5m. Type: guided. Test checks: a `form`, an `input`, and a submit `button` are present.
- Level 2 (guided): "Name & Email Inputs" — Objective: Add name and email inputs (labels introduced later in Level 7). Estimated 5m. Type: guided. Test checks: inputs with expected `name` attributes present.
- Level 3 (guided): "Message Field & Submit" — Objective: Add a `textarea` for message and a submit control. Estimated 5m. Type: guided. Test checks: textarea and submit button present.
- Level 4 (practice): "Input Types" — Objective: Use appropriate `type` attributes (`email`, `tel`, `password`, `number`, `range`, `file`). Estimated 6m. Type: practice. Test checks: inputs use correct `type` values.
- Level 5 (guided): "Select, Optgroup & Options" — Objective: Add a `select` element with options and at least one `optgroup`. Estimated 5m. Type: guided. Test checks: select element with at least two options present and one `optgroup` grouping options.
- Level 6 (practice): "Radios & Checkboxes" — Objective: Implement radio groups and checkboxes with proper `name` usage. Estimated 5m. Type: practice. Test checks: radio inputs share a name and checkboxes are present.
- Level 7 (guided): "Labels & Accessibility" — Objective: Attach `label` elements to controls; explain implicit labeling (input nested inside `label`) and explicit labeling using `for` paired with an input `id`. Estimated 6m. Type: guided. Test checks: each control has an accessible label; explicit labels use a `for` that matches the input's `id`, or inputs are nested inside their `label`.
- Level 8 (guided): "Grouping Controls" — Objective: Use `fieldset` and `legend` to group related controls. Note: `fieldset` and `legend` are semantic tags (see Lesson 01 on semantic tags). Estimated 4m. Type: guided. Test checks: presence of `fieldset`/`legend` for at least one group.
- Level 9 (guided): "Basic Validation" — Objective: Add `required`, `minlength`, `maxlength`, and for `range` inputs, `min`/`max` attributes where appropriate. Estimated 6m. Type: guided. Test checks: required and range bounds present for key fields.
- Level 10 (practice): "Debugging & Fixing Common Mistakes" — Objective: Identify and fix common form mistakes (missing `for`/`id`, incorrect input types, `div` used instead of semantic tags, missing submit control). Estimated 6m. Type: practice. Test checks: provided broken snippets are corrected (id/for added, `div` replaced, attributes set correctly).
- Level 11 (challenge): "Integrate & Polish" — Objective: Combine all pieces, confirm accessibility, and pass integration tests. Estimated 2m. Type: challenge. Test checks: all integration assertions and accessibility checklist pass.

## Assessment & rubric

- Pass: All automated tests for the level pass (structure, labels, types, attributes).
- Partial: Tests fail but show incremental correctness (e.g., form exists but labels missing).
- Fail: Missing core structure or misuse of elements (e.g., using `div` instead of `label`).

## Instructor notes

- Starter `index.html` should be intentionally incomplete with `<!-- TODO: -->` comments. Do NOT include full working solutions in student-visible files. Instructor-only reference material may be stored under `.engine/private/` if needed.
- Keep hints Socratic: ask students questions about focus and accessibility instead of giving code.

## Suggested test paths (engine)

Place per-level tests at: `.engine/tests/lesson-02-level-01.test.ts` etc. Each test should include a brief "Helpful Hint" string for failures and run quickly (<500ms).

## Resources for instructors

- MDN: Forms and Form Controls
- W3C: Web Accessibility for Forms
- Simple examples for `label`, `fieldset`, and `input` types (use as reference only)
