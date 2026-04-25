## Level 01 — Select Git Bash as default terminal

### Objective

Configure Visual Studio Code to use Git Bash as the integrated terminal on Windows.

### Benefits

- Makes the terminal easier to use for common Linux-style commands.
- Matches the shell used in other class examples.

### Complete these tasks

- Open the Command Palette and choose `Terminal: Select Default Profile`.
- Pick _Git Bash_ and restart the integrated terminal.
- Create an `answer.js` file that exports a short string mentioning Git Bash.

### Hints

- Use the Command Palette (`Ctrl+Shift+P`) and type "Select Default Profile".
- If you don't see Git Bash, make sure Git for Windows is installed.

### More information

- Git Bash is a bash shell packaged with Git for Windows. It supports `ls`, `cd`, `./`, and other familiar commands.
- Further reading: https://git-scm.com/download/win

### Usage tips

- Restart the integrated terminal after changing the default profile.

### Example

- Example `answer.js` shape (don't copy verbatim):

```js
// export default "a short string that mentions git bash"
```
