# Level 07 — onsubmit function

## Objective

Assign a named function to `form.onsubmit` that accepts an `event` parameter and logs a short explanation of `onsubmit`.

## Benefits

- Practice wiring a submit handler and observe default navigation behavior.

## Complete these tasks

- Attach a function to `form.onsubmit` that logs a string explaining `onsubmit`.

## Hints

- If you submit the form and the page navigates, try adding `event.preventDefault()` in the next level.

## More information

- `onsubmit` runs when a form is submitted; returning `false` or calling `preventDefault()` prevents navigation.

## Usage tips

- Use `console.log` inside the handler to confirm it's called.

## Example

```js
function handleSubmit(event) {
  console.log("onsubmit runs when form is submitted");
}

// assign the handler to the form
const form = document.getElementById("sample-form");
if (form) form.onsubmit = handleSubmit;
```
