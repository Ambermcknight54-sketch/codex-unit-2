# Level 09 — event.target

## Objective

Inside a submit handler, inspect `event.target` and `event.currentTarget`, and save references to the form and named inputs using `form.elements`.

## Benefits

- Understand how events expose the element that triggered them and the current handler target.

## Complete these tasks

- Inside the handler, `console.log(event.target, event.currentTarget)`.
- Save `const form = event.target` and read named inputs via `form.elements`.

## Hints

- `event.currentTarget` is the element the listener is attached to, `event.target` is the originator.

## More information

- Use `form.elements.myInputName` to access inputs by their `name` attribute.

## Usage tips

- Log `form.elements` to see index and name-based access.

## Example

```js
const form = event.target;
```
