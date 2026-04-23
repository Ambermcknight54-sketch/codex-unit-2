## Level 02 — Intro: What Is an Object?

### Objective

- Explain what a JavaScript object is in simple terms.

### Benefits

- Helps you understand when to use objects instead of simple values or arrays.

### Complete these tasks

- In `explanation.js` export a short string that explains JavaScript objects. The string must use the words "key" and "value".
- In `examples.js` export an array of two short strings: one phrase comparing objects vs primitives, one comparing objects vs arrays.

### Hints

- Mention "key" and "value" clearly. Keep sentences short and simple.

### More information

- An object stores named values: each name is a "key" and it points to a "value" (which can be text, a number, another object, etc.).
- Short contrasts to use in examples:
  - Primitives (like "hello" or 5) hold a single value.
  - Arrays hold items in order accessed by number (index).
  - Objects hold values looked up by name (keys).
- Make sure both example items are plain strings.
- Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

### Usage tips

- Keep the explanation to one or two short sentences and each example under one line.

### Example

```
// explanation.js
export default "Objects are collections of key/value pairs."

// examples.js
export default ["Primitives hold one value; objects hold named values.", "Arrays are ordered lists; objects use named keys for lookup."]
```
