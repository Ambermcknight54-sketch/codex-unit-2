## Level 07 — Updating Properties

### Objective

- Change values that already exist on an object and export the updated object.

### Benefits

- Shows how to change an object's data later in code and what that means for other code using the same object.

### Complete these tasks

- In `update.js`, start with an object that has at least one property, change its value using assignment (like `obj.key = newValue`), and export the updated object.

### Hints

- Make sure the property you change exists; use `obj.key = newValue` to update it.

### More information

- Objects are mutable: changing a property updates the original object. Do the updates before exporting so tests see the final values.
- If the task expects an increment, write `obj.age = obj.age + 1`; if it expects a set, assign a specific value.
- Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

### Usage tips

- Keep updates simple and predictable so tests can check the value.

### Example

```
const obj = { age: 0 }
obj.age = obj.age + 1
export default obj
```
