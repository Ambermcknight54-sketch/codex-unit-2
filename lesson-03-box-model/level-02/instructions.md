## Level 02 — Visualize with HTML/CSS

### Objective

Build a minimal page that visually highlights content, padding, border, and margin using distinct colors and borders.

### Benefits

- Makes layout differences visible and inspectable in devtools.
- Reinforces how CSS properties affect spacing.

### Complete these tasks

- Create nested elements representing margin → border → padding → content.
- Apply background colors and borders so each layer is clearly distinct.

### Hints

- Use different background colors for content and padding.
- Borders help show the border layer; spacing outside the border represents margin.

### More information

The box model layers are visualized with backgrounds, borders, padding, and margin. To show each layer:

- Use a background color on the innermost element for the content area.
- Apply padding and a different background or subtle outline to show the padding region.
- Use a visible border to represent the border layer.
- Leave space outside the border (or use a transparent element) to indicate margin.

DevTools' box model inspector also shows computed values for each layer.

Further reading: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

### Usage tips

- Start with large padding/border values so layers are easy to see.

### Example

Use nested divs with classes like `.layer-content`, `.layer-padding`, `.layer-border`, `.layer-margin`.
