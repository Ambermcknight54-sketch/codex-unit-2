## Level 08 — Nested Properties

### Objective

- Make an object that contains another object inside it (nested) and export it.

### Benefits

- Shows how to group related settings or values inside one object.

### Complete these tasks

- In `nested.js`, create an object with a nested object (for example `{ theme: { color: 'blue' } }`) and export it.

### Hints

- If you plan to export a deep value, make sure the inner object exists first or export the whole nested object.

### More information

- A nested object is just an object used as a value: `{ settings: { theme: { color: 'blue' } } }`.
- Tests may look for a nested path, so include the exact keys required. You can export the outer object or a nested value like `settings.theme.color`.
- Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

### Usage tips

- Keep nesting shallow and clear—two levels is usually enough for these exercises.

### Example

```
export default { theme: { color: 'blue' } }
```
