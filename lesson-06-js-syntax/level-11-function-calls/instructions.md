# Level 11 — Call provided function with args (10 calls)

## Objective

Call the helper `reportScore(playerName, score)` 10 times with different arguments and save each return value into a descriptive camelCase `const` variable using one-line declaration+initialization.

## Benefits

- Practice calling functions with arguments and capturing return values.

## Complete these tasks

- Make 10 calls to `reportScore` using different player names and scores.
- Save each return value as a `const` with a descriptive name.
- Export one of the `const` report variables as the `default` export so unit tests can inspect a submitted value.
- Write each line from scratch; do NOT copy & paste any code. Typing each line reinforces syntax memory and debugging skills.

## Hints

- Use `const avaReport = reportScore("Ava", 42);` as the pattern.

## More information

- `const` is used because the saved report values shouldn't change.

## Usage tips

- Vary names and scores to get meaningful output for each call.

## Example

```js
const avaScoreReport = reportScore("Ava", 42);
```
