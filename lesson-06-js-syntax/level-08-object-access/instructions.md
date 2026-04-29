# Level 08 — Nested object access and extraction

## Objective

Given a nested object, access 5 properties at depth-1 and 5 properties at depth-2, assigning each to a descriptive variable in one line.

## Benefits

- Practice property navigation and assignment from nested structures.

## Complete these tasks

- Create one-line declarations that extract depth-1 and depth-2 properties into descriptive camelCase variables.
- Export one of the extracted values as the `default` export so unit tests can inspect a submitted value.
- Write each line from scratch; do NOT copy & paste any code. Typing each line reinforces syntax memory and debugging skills.

## Hints

- Use dot notation like `order.customer.name` for nested access.

## More information

- If a property may be undefined in real apps, optional chaining (`?.`) helps — not required here.

## Usage tips

- Keep variable names descriptive of the extracted value.

## Example

```js
let customerName = order.customer.name;
```
