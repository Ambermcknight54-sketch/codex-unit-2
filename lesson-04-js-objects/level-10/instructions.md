## Level 10 — Debugging Object Errors (Common Pitfalls)

### Objective

- Find and fix simple object bugs like typos, missing checks, or unnamed functions. Export the fixed value or object.

### Benefits

- Teaches debugging steps so your code doesn't crash when a property is missing or misspelled.

### Complete these tasks

- Open the provided broken example file and fix each problem. Specifically:
  - Fix typos in property names.
  - Add checks before accessing nested properties when necessary.
  - There will be an unnamed function (the bug): give it a name and then attach it to the object as a method. Finally, default-export the corrected value/object from `fixes.js`.

### Hints (minimal)

- Common quick checks:
  - Spell property names exactly (`person.name` not `person.nmae`).
  - If you see `obj.inner.color`, make sure `obj.inner` exists first.
  - For the unnamed-function bug: replace the anonymous function with a named function (for example, `function say() { ... }`) and then assign it to the object (`user.say = say`).

### More information

- Common fixes and a focused workflow:
  1. Read the broken file and run it to see the error.
  2. Fix any typos in property names.
  3. Add existence checks before accessing nested properties when needed.
  4. Find any function that was created anonymously and left unassigned (this is the deliberate bug). Convert it to a named function, then attach it to the object. Example:

```js
// buggy pattern (what you'll see):
const user = { name: "Ava" };
user.say = function () {
  return "hello " + user.name;
}; // anonymous function assigned immediately

// fix: give the function a name, then attach it
function say() {
  return "hello " + user.name;
}
user.say = say;
export default user;
```

- After your fixes, import the file in Node or run the tests to verify the exported value is correct and the runtime error is gone.
- Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

### Usage tips

- Make only the small changes needed to fix the bug; do not add extra behavior.

### Example

```
// Fix typo: person.nmae -> person.name
```
