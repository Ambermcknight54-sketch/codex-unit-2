## Level 09 — Challenge: Debug & Build (Unguided)

### Objective

Independently diagnose and fix spacing/overflow issues in a small mockup using box model knowledge, default overrides, and `box-sizing`.

### Benefits

- Tests independent problem solving and application of the box model.

### Complete these tasks

- Inspect the layout and identify why the items overflow.
- Apply a fix that keeps semantic markup and uses minimal changes.

### Hints (minimal)

- Compute combined width (content + padding + border + margin) to find constraints.
- `box-sizing: border-box` often simplifies width calculations.

### More information

For this challenge, focus on minimal, robust fixes: prefer changing `box-sizing` or reducing widths slightly before making many layout changes. Use DevTools to inspect computed widths and margins and verify no horizontal overflow remains.

Further reading: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

### Example

Try applying `box-sizing: border-box` globally or adjust `.item` width/border/padding.
