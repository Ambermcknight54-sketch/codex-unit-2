## Level 11 — Challenge: Build Objects from Descriptions

### Objective

- Read a short specification and build an object that matches it. Add any required methods as named functions and export the object.

### Benefits

- Brings together everything you've learned about objects, properties, and methods.

### Complete these tasks

- In `object.js`, implement the object described in the spec (for example a `book` with `title`, `author`, `pages` and a `summary` method). Use a named function for the method and attach it to the object. Export the final object.

### Hints

- Write the method as a named function first (e.g., `function summary() { ... }`) and then do `book.summary = summary`.

### More information

- Steps to finish the challenge:
  1. Decide which properties the object needs and what type each should be (string, number).
  2. Create the object with those properties.
  3. Write any methods as named functions and attach them to the object.
  4. `export default` the object.
- Keep outputs predictable (no random values or console I/O) so tests can check the results.
- Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

### Usage tips

- Start by writing the object shape (keys and sample values), then add methods last.

### Example

```
function summary() { return `${this.title} by ${this.author}` }
const book = { title: 'Example', author: 'A Writer', pages: 100 }
book.summary = summary
export default book
```
