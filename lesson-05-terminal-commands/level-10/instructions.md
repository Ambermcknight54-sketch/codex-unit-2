## Level 10 — Challenge: Multi-step script run

### Objective

Use the VS Code file explorer to create or move files, then run the script with `node`, clear the terminal, and return to the original folder.

### Benefits

- Practices combining UI and terminal workflows used in real projects.

### Complete these tasks

- Create a new folder in the VS Code explorer and move a script into it using the UI.
- In the terminal run `node ./folder/script.js`, then clear the terminal and `cd` back.
- Export an object in `answer.js`: `{ steps: [...], notes?: "..." }` and include a note that mentions VS Code.

### Hints

- Use the file explorer drag/drop or the three-dot menu to move files.

### More information

- The test checks that `steps` includes `node` and `notes` mentions VS Code.

### Usage tips

- Use short step strings like `node ./folder/script.js` so tests can match them.

### Example

```js
// export default { steps: ["node ./folder/script.js"], notes: "moved file using VS Code" }
```
