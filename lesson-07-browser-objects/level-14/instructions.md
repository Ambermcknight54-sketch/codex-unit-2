# Level 14 — Mini-project

## Objective

Build a small form handler that prevents default submission, reads values via `form.elements`, validates fields, displays a summary in the DOM, and resets the form on success.

## Benefits

- Integrates selection, submission handling, reading controls, and resetting forms.

## Complete these tasks

- Prevent default submission behavior.
- Read values (text, textarea, range, radio, checkbox) via `form.elements`.
- Validate one or two fields and display a summary in `#summary`.
- Call `form.reset()` on success.

## Hints

- Convert numeric values with `Number()` and read radio values using their `name`.

## More information

- Keep validation simple (required fields, min lengths). Use `form.reset()` to clear on success.

## Usage tips

- Show the summary before resetting so the student can inspect results.

## Example

```js
const form = event.target;
const name = form.elements.name.value;
```
