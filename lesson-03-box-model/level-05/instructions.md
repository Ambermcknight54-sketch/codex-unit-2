## Level 05 — Inline vs Block Elements

### Objective

Compare `display` types (`inline`, `block`, `inline-block`) and demonstrate how width/height/padding behave for each.

### Benefits

- Helps choose appropriate elements and CSS for layout and semantics.

### Complete these tasks

- Convert elements between `inline`, `block`, and `inline-block`.
- Note how setting width/padding affects each display type.

### Hints

- `inline` elements ignore width/height but accept horizontal padding.
- `inline-block` accepts width/height while flowing inline.

### More information

Display types determine how elements participate in layout:

- `block`: takes full available width, accepts width/height, starts on a new line.
- `inline`: flows within text, ignores width/height, accepts horizontal padding/margin.
- `inline-block`: flows inline but accepts width/height and vertical padding.

Use semantic elements (e.g., `button`, `nav`) when appropriate; changing `display` doesn't change semantics for assistive tech.

Further reading: https://developer.mozilla.org/en-US/docs/Web/CSS/display

### Usage tips

- Use `inline-block` for horizontal controls that need explicit sizing.

### Example

Set `.demo-inline { display: inline-block; width: 120px; }` to see width applied.
