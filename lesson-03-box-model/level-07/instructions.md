## Level 07 — Box-Sizing & Responsive Considerations

### Objective

Compare `box-sizing: content-box` vs `box-sizing: border-box` and apply the proper model for responsive sizing.

### Benefits

- Prevents surprising size changes when adding padding/borders.

### Complete these tasks

- Toggle `box-sizing` on example elements and note width differences.
- Apply a global border-box rule and explain its benefits.

### Hints

- `content-box` calculates width from the content only.
- `border-box` includes padding and border inside the declared width.

### More information

`box-sizing` controls whether padding and border are included in an element's declared width. `border-box` includes padding and border inside the width, which makes responsive sizing simpler. Many projects use `*, *::before, *::after { box-sizing: border-box }` for predictability.

Further reading: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

### Usage tips

- Use `border-box` to make element sizing more predictable.

### Example

Try `.box { box-sizing: border-box }` on all elements.
