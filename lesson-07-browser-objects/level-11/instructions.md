# Level 11 — textarea-range

## Objective

Read `textarea` and `range` values from `form.elements` and coerce numeric values with `Number()` when appropriate.

## Benefits

- Ensures numeric fields are correctly typed for logic or calculations.

## Complete these tasks

- In the submit handler, read `form.elements.message.value` and `Number(form.elements.volume.value)`.
- Log both values.

## Hints

- `Number('42')` converts the string to the number `42`.

## More information

- Range inputs return string values; convert when performing math.

## Usage tips

- Validate conversions with `isNaN()` when needed.

## Example

```js
const volume = Number(form.elements.volume.value);
```
