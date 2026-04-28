# Level 09 — Debug 10 single-depth real-world objects

## Objective

Fix ten single-depth object literals that each contain one syntax bug so they parse as valid object literals.

## Benefits

- Build confidence spotting common object literal mistakes.

## Complete these tasks

- Repair 10 provided objects so each is a valid object literal.
- After fixing objects, export one of the repaired objects as the `default` export so unit tests can inspect a submitted value.
- Write each line from scratch; do NOT copy & paste any code. Typing each line reinforces syntax memory and debugging skills.

## Hints

- Look for `=` used instead of `:`, missing commas, or wrong brackets.

## More information

- Object properties are `key: value` pairs separated by commas inside `{}`.

## Usage tips

- Fix one object at a time and run the file to verify it parses.

## Example

```js
let product = { name: "Shoes", price: 49.99, inStock: true };
```
