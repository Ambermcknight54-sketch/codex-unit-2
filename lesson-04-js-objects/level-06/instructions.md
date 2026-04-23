## Level 06 — Adding Properties

### Objective

- Add new properties to an object using dot notation and export the updated object.

### Benefits

- Shows how to change an object after it's created and what that looks like in code.

### Complete these tasks

- In `add.js`, make an object, add at least one new property using `obj.newKey = value`, and export the final object.

### Hints

- Add properties before exporting, e.g. `obj.age = 30`.

### More information

- When you add properties like `obj.age = 30`, you change the original object (this is called mutation). Other variables that point to the same object will see the change.
- Use simple values (strings or numbers) for the new properties so tests can check them easily.
- Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

### Usage tips

- Avoid random or time-based values so tests get the same result every time.

### Example

```
const obj = {}
obj.age = 30
export default obj
```
