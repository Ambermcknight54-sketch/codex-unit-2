## Level 10 — Challenge: Multi-step script run

### Objective

Use the VS Code file explorer to create or move files, then run the script with `node`, clear the terminal, and return to the original folder.

### Benefits

- Practices combining UI and terminal workflows used in real projects.

### Complete these tasks

- Create a new folder in the VS Code explorer and move a script into it using the UI.
- In the terminal run `node ./folder/script.js`, then clear the terminal and `cd` back.
- With `answer.js`, export an array with the VS Code steps and terminal commands you used.

### Hints

- Use the file explorer drag/drop or the three-dot menu to move files.

### More information

- The test checks that array includes commands and VS Code steps like `node` and `added file`.

### Usage tips

- Use short step strings like `node ./folder/script.js` so tests can match them.
