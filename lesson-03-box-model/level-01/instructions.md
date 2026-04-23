## Level 01 — Intro to the Box Model

### Objective

Explain the four box model layers (content, padding, border, margin) and their stacking order.

### Benefits

- Helps reason about spacing and element sizes.
- Foundation for layout and responsive design.

### Complete these tasks

- Name and briefly describe each box layer.
- Sketch or write a short paragraph showing the stacking order.

### Hints

- The content area is where text and images appear.
- Padding increases the space inside the element before the border.
- Border is drawn around padding; margin sits outside the border.

### More information

The CSS box model defines four layers from inside → out: content, padding, border, and margin.

- Content: area where text and images appear.
- Padding: space inside the border between content and border.
- Border: the line drawn around padding and content.
- Margin: outer space that separates this element from others (vertical margins can collapse).

Tip: `box-sizing` controls whether padding and border are included in an element's declared width; many projects use `border-box` for simpler sizing.

Further reading and illustrations: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

### Usage tips

- Keep descriptions short and use consistent terms (content, padding, border, margin).

### Example

Small note: a paragraph describing the layers is sufficient; no code required.
