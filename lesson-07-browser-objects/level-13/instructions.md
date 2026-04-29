# Level 13 — form-reset

## Objective

Validate one field in the submit handler; on success display a DOM summary and call `form.reset()` to clear inputs.

## Benefits

- Practice simple client-side validation and clearing forms after success.

## Complete these tasks

- Validate `username` for a minimum length.
- If valid, show a simple success message in `#result` and call `form.reset()`.

## Hints

- Use `if (form.elements.username.value.length >= 3) { ... }` as a simple check.

## More information

- `form.reset()` returns inputs to their initial values.

## Usage tips

- Show a short confirmation before or after resetting so students can see the result.

## Example

```js
form.reset();
```
