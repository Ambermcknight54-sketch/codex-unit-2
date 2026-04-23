## Level 03 — Exporting Objects (ES Modules: default export)

### Objective

- Create a small object and export it so tests can check its properties.

### Benefits

- Shows how to give other files a single object value they can import.

### Complete these tasks

- In `object.js` make a simple object (for example, `const user = { name: 'Ava' }`) and default-export it.

### Hints

- Write the object first, then `export default user;`. Keep the file simple with only the export.

### More information

- The exported value must be an actual object. Use simple keys (strings or numbers) and plain values (no random or time-based values).
- Tests will import your object and look for keys by name, so include the exact keys the tests expect (e.g., `name`).
- Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

### Usage tips

- Include only the properties the tests need. Smaller objects are easier to check.

### Example

```
const user = { name: 'Ava' }
export default user
```
