## Level 03 — Padding / Border / Margin Deep Dive

### Objective

Change padding, border, and margin values to observe layout shifts and spacing effects.

### Benefits

- Builds intuition for how each property affects element size and surrounding flow.

### Complete these tasks

- Modify padding, border-width, and margin on the demo box.
- Observe how surrounding content moves and document one observation.

### Hints

- Increase `padding` to grow the space inside the border.
- Increase `margin` to push other elements away.
- `border-width` affects the visible line between padding and margin.

### More information

Padding increases the inside space between content and border; border adds visible thickness around padding; margin creates outer spacing between elements. Use DevTools to view computed padding, border, and margin values.

Tip: change one property at a time (padding, then border, then margin) to observe how each affects layout.

Further reading: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

### Usage tips

- Tweak one property at a time to isolate effects.

### Example

Change `.demo { padding: 20px; border: 4px solid #333; margin: 16px; }`.
