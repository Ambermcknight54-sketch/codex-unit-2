## Level 04 — Declaring Objects (Literals)

### Objective

- Create objects using literal syntax and export the result so tests can import and verify keys.

### Benefits

- Teaches how to represent structured data inline with clear, testable shapes.

### Complete these tasks

- Default-export an object literal from `example.js`, containing the keys and simple values required by the tests.

### Hints

- Use `{ key: value, ... }` syntax with comma-separated entries; keys should be valid identifiers or quoted strings.

### More information

- Object literals are written as `{}` with zero or more key/value pairs. Keys are typically identifiers (unquoted) and values can be primitives or nested literals.
- For tests, keep values deterministic (strings/numbers/booleans) and avoid functions or runtime-only values.
- Example pattern to follow: `export default { a: 1, b: 'x' }` — replace `a`/`b` with the keys your level's test expects.
- Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

### Usage tips

- Prefer short descriptive keys and literal values so tests can compare them easily.

### Example

```
export default { a: 1, b: 'x' }
```
