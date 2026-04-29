# Level 04 — innerHTML

## Objective

Set an element's `innerHTML` to include simple markup (for example a `<strong>` element) and log before/after values; discuss differences with `innerText`.

## Benefits

- Learn when it's appropriate to insert simple HTML vs plain text.

## Complete these tasks

- Log the current `innerHTML` of `#content`.
- Set a small markup string as `innerHTML` and log the updated value.

## Hints

- Avoid inserting large or complex HTML; keep changes small and deliberate.

## More information

- `innerHTML` injects HTML and can run scripts if not careful; use only trusted strings.

## Usage tips

- Prefer `innerText` for text-only updates to avoid XSS risks.

## Example

```js
const el = document.getElementById("content");
```
