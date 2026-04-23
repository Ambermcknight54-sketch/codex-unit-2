## Level 08 — Practice: Debug & Build (Guided)

### Objective

Work through a guided mockup that includes hints to fix spacing/overflow issues and compute total element width (content + padding + border + margin).

### Benefits

- Builds debugging habits for the box model with instructor-guided steps.

### Complete these tasks

- Follow the guided steps in the page to compute total rendered width for `.item`.
- Apply a minimal change (e.g., reduce width or use `box-sizing: border-box`) so both items fit.

### Hints

- Step 1: Compute content + padding + border + margin for an `.item`.
- Step 2: Try `box-sizing: border-box` or reduce `.item` width slightly.

### More information

To stop overflow, compute an element's rendered width as: content + left/right padding + left/right border + left/right margin (unless using `border-box`, which includes padding and border). Use DevTools to inspect computed sizes and adjust one property at a time.

Further reading: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

### Usage tips

- Work one property at a time and verify in devtools.

### Example

Start with `.item { box-sizing: border-box }` or reduce `.item { width: 120px }`.
