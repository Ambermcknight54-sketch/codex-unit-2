## Level 05 — Accessing Properties (Dot Notation)

### Objective

- Show how to read a value from an object using dot notation and export that value.

### Benefits

- Lets you pull a named value (like a name or age) out of an object in a simple way.

### Complete these tasks

- In `access.js`, create or use an object and export a property value using dot notation (for example `user.name`).

### Hints

- Use `obj.key` for normal keys. If a key has spaces or symbols, use `obj["key-name"]`.

### More information

- Dot notation looks like `object.key` and is the easiest way to get data from objects.
- Make sure the property exists before exporting it, or export a value you know is present so the tests won't crash.
- Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

### Usage tips

- Export simple types (a string or number) so tests can check the result easily.

### Example

```
const user = { name: 'Ava' }
export default user.name
```
