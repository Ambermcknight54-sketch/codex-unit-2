# Level 10 — form-elements

## Objective

Use `const form = event.target` and read values via `form.elements` (for example `const message = form.elements.message.value`).

## Benefits

- Learn to access form values using `name` attributes and `form.elements`.

## Complete these tasks

- In a submit handler, read `form.elements.message.value` and `form.elements.email.value` and log them.

## Hints

- `form.elements` can be indexed by number or `name`.

## More information

- Using `name` attributes makes `form.elements` easier to use across handlers.

## Usage tips

- Assign readable names to inputs to make code self-documenting.

## Example

```js
const message = form.elements.message.value;
```
