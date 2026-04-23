## Level 09 — Methods: Declare Functions Then Assign

### Objective

- Write a named function and then attach it to an object as a method. Export the object.

### Benefits

- Shows how to give objects behaviors (functions) while keeping the code readable.

### Complete these tasks

- In `object.js`, write a named function (for example `function greet(name) { ... }`), create an object, assign the function to a property (`user.greet = greet`), and export the object.

### Hints

- Use `function name(...) { ... }` so the function has a name. Avoid anonymous or arrow functions for this task.

### More information

- A named function can be added to an object so you can call it like `user.greet('Ava')`.
- Tests may check that the property is a function and that it points to the named function you wrote.
- Keep the function simple and deterministic (no random values or external input).
- Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

### Usage tips

- Avoid printing to the console inside the function; make it return a value so tests can check it.

### Example

```
function greet(name) { return 'Hi ' + name }
const user = { name: 'Ava' }
user.greet = greet
export default user
```
