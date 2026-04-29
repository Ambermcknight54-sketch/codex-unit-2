# Level 12 — radio-checkbox

## Objective

Read selected radio values and checkbox states via `form.elements` or `FormData` and log descriptive variables.

## Benefits

- Understand how to collect boolean and selected-choice inputs.

## Complete these tasks

- Read `form.elements.color.value` and `form.elements.subscribe.checked` inside the submit handler and log them.

## Hints

- For groups of radios, `form.elements.color.value` returns the currently selected value.

## More information

- `checked` is a boolean on checkbox inputs; radios expose a `value` for the selected option.

## Usage tips

- Use `const wants = Boolean(form.elements.subscribe.checked)` to store intent clearly.

## Example

```js
const color = form.elements.color.value;
```
