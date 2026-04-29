## Level 01 — Exporting Values (ES Modules)

### Objective

- Make two small Node.js files that each export a single value using a default export. Tests will import these files to check your answers.

### Benefits

- Helps you learn how modules share values and makes your code easy for automated tests to read.

### Complete these tasks

- In `description.js` export a short sentence.
- In `examples.js` export an array of words. Examples should be simple text. There should be at least 3 items in the array.

### Hints

- Use `export default "abc"` for a string and `export default ["a","b"]` for an array. Keep the text short and clear.

### More information

- A default export means the file gives one main value to whoever imports it. In Node/EJS you can write:
  - `export default "A short sentence."` (for a string)
  - `export default ["a", "b"]` (for an array)

- For this level you only need to provide plain text values (strings/arrays). Do not add extra code that runs when the file is imported.
- Make sure the files contain valid JavaScript. If there's a syntax error the tests cannot import them.
- Read more (optional): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

### Usage tips

- Keep the description to one short sentence. Keep examples short (single-line strings) so tests are reliable.

### Example

```
// description.js
export default "A short sentence."

// examples.js
export default ["sentences 1", "sentence 2"]
```
