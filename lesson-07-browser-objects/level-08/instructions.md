# Level 08 — preventDefault

## Objective

Update the submit handler to call `event.preventDefault()` before logging so client-side code can run without navigation.

## Benefits

- Enables client-side validation and DOM updates after submit.

## Complete these tasks

- Modify your submit handler to call `event.preventDefault()` and then `console.log` an explanation.

## Hints

- `event.preventDefault()` must run inside the handler before doing time-consuming or visible updates.

## More information

- Preventing default stops the browser's navigation behavior for form submissions.

## Usage tips

- Confirm logs remain visible after submit when navigation is prevented.

## Example

```js
function handleSubmit(event) {
  event.preventDefault();
  console.log("preventDefault stops navigation");
}
```
