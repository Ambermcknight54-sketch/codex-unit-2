## Level 04 — Default Element Styles

### Objective

Explore common user-agent defaults (e.g., margins on `h1`, `p`) and how to override them.

### Benefits

- Knowing defaults prevents surprises when styling layouts.

### Complete these tasks

- Inspect computed styles for `h1` and `p` in devtools.
- Add CSS to override or reset their margins and explain the change.

### Hints

- Browsers often apply top/bottom margins to headings and paragraphs.
- A simple reset is `h1, p { margin: 0; }`.

### More information

Browsers apply default (user-agent) styles such as margins on headings and paragraphs. A reset or targeted override removes or changes those defaults. Example resets: `h1, p { margin: 0; }` or a small rule `h1 { margin-top: 0; }` to reduce unexpected spacing.

DevTools shows the user-agent stylesheet under computed styles.

Further reading: https://developer.mozilla.org/en-US/docs/Web/CSS/initial

### Usage tips

- Test changes both with and without your reset to see differences.

### Example

Add `h1 { margin-top: 0; }` to reduce unexpected spacing.
