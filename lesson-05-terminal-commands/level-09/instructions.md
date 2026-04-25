## Level 09 — Practice: Navigate and run

### Objective

Combine `ls`, `cd`, relative paths, and `node` to find and run a script in a subfolder.

### Benefits

- Builds fluency with basic command-line workflows.

### Complete these tasks

- Open the terminal, run `ls` to find a folder, `cd` into it, and run `node script.js`.
- Create `answer.js` that exports an object `{ steps: [ ... ] }` listing the commands you used.

### Hints

- Use `ls` to discover where scripts live and `cd` to move to them.

### More information

- Tests will look for `ls`, `cd`, and `node` inside your `steps` array.

### Usage tips

- Keep your steps simple and ordered so the test can validate them.

### Example

```js
// export default { steps: ["ls","cd folder","node script.js"] }
```
