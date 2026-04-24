---
title: "JavaScript Objects"
slug: "lesson-04-js-objects"
topicTags:
  - javascript
  - objects
  - programming
total_estimated_minutes: 60
max_levels: 15
concepts:
  - object literals and declaration
  - property access (dot notation)
  - adding and updating properties
  - methods assigned after function declaration
  - debugging common object errors
  - default ES module exports only (one default export per file)
---

## Overview

This lesson introduces JavaScript objects: how to declare them, read and write properties, add methods (by declaring functions first and then assigning them), debug common object-related errors, and export values via a single default ES module export so tests can import student work. Students will get guided introductions, hands-on practice debugging broken objects, and a challenge to declare objects from descriptions.

## Learning Goals

- Declare object literals and understand object structure.
- Read and write properties using dot notation.
- Add and update properties at runtime.
- Define functions and assign them as object methods (no anonymous/arrow functions).
- Debug common errors like `undefined` properties, typos, and incorrect method bindings.
- Export a single value as the default export so test runners can import and assert behavior.

## Levels

### Level 01 — Exporting Values (ES Modules)

- Estimated minutes: 5
- Difficulty: 1
- Type: guided
- Tests required: true
- Objective: Introduce ES module default exports for simple values so student work can be imported by tests.
- Files expected:
  - `level-01/description.js` — default-export a short description string.
  - `level-01/examples.js` — default-export an array of short examples.
- Activities & examples:
  - `// level-01/description.js` — `export default "A short description of objects.";`
  - `// level-01/examples.js` — `export default ["{ a: 1 }", "{ name: 'Ava' }"];`
  - Provide one default export per file; tests will import each file's default export separately.
- Rubric:
  - Pass: Provides two files that each `export default` the expected value with valid ESM syntax.
  - Partial: Only one file present or minor syntax/content issues.
  - Fail: Uses non-ESM syntax, uses named exports instead of a default export, or has invalid export syntax.

### Level 02 — Intro: What Is an Object?

- Estimated minutes: 6
- Difficulty: 1
- Type: guided
- Objective: Explain objects as key/value collections and contrast with primitives and arrays.
- Rubric:
  - Pass: Provides a clear explanation that names "key" and "value", includes two short examples, and `export default` the explanation string using valid ESM syntax.
  - Partial: Provides an explanation or examples but the default export is missing, incomplete, or has minor syntax/content issues.
  - Fail: No default export, invalid export syntax, or explanation confuses objects with other types.
- Files expected:
  - `level-02/explanation.js` — default-export a short explanation string that names "key" and "value" and gives a brief description.
  - `level-02/examples.js` — default-export an array of two strings: first contrasts objects with primitives, second contrasts objects with arrays.
- Activities & examples:
  - `// level-02/explanation.js` — `export default "Objects are collections of key/value pairs...";`
  - `// level-02/examples.js` — `export default [
  "Objects hold named keys mapping to values; primitives (string/number/boolean) hold a single value.",
  "Arrays are ordered lists accessed by index; objects use named keys for lookup."
];`
- Rubric (files):
  - Pass: Both files present and each `export default` uses valid ESM syntax; explanation mentions "key" and "value" and examples are two explanatory strings (primitives vs objects, arrays vs objects).
  - Partial: One file present or small syntax/content issues.
  - Fail: No files, invalid exports, or examples that are not strings as required.

### Level 03 — Exporting Objects (ES Modules: default export)

- Estimated minutes: 4
- Difficulty: 1
- Type: guided
- Tests required: true
- Objective: Teach exporting objects using an ES module default export so tests can import the student's object.
- Activities & examples:
  - Declare an object: `const user = { name: 'Ava' };`
  - Export it as the default: `export default user;`
  - Provide only the default export; tests will import the default value.
- Rubric:
  - Pass: Provides a valid default export of an object using ESM syntax and the object matches the expected simple shape.
  - Partial: Default export present but the object is missing required properties or has minor syntax issues.
  - Fail: Missing default export, uses named/CommonJS exports, or invalid syntax.

### Level 04 — Declaring Objects (Literals)

- Estimated minutes: 6
- Difficulty: 2
- Type: guided
- Tests required: true
- Objective: Create objects using literal syntax.
- Activities: Declare literals, e.g. `const obj = { a: 1, b: "x" };`.
- Rubric:
  - Pass: Declares correct object literal(s) and provides the example via a default-exported value/file using valid ESM syntax.
  - Partial: Declares a single literal or the default export has minor issues.
  - Fail: Missing default export, invalid export syntax, or invalid object literal.

### Level 05 — Accessing Properties (Dot Notation)

- Estimated minutes: 5
- Difficulty: 2
- Type: guided
- Tests required: true
- Objective: Use dot notation to access properties and explain lookup by key name.
- Activities: Access `user.name` and read simple properties by name.
- Rubric:
  - Pass: Demonstrates dot access and provides the example(s) via a default-exported file; ESM syntax must be valid.
  - Partial: Demonstrates dot access but default export has minor issues.
  - Fail: No default export, invalid syntax, or incorrect demonstrations.

### Level 06 — Adding Properties

- Estimated minutes: 4
- Difficulty: 2
- Type: practice
- Tests required: true
- Objective: Demonstrate how to add new properties to an object at runtime.
- Activities: `obj.age = 30; obj.score = 42;` (show dot form for adding properties).
- Rubric:
  - Pass: Adds new properties using dot notation and provides the result via a default-exported value/file with valid ESM syntax.
  - Partial: Adds properties but the default export is missing, incorrect, or has minor syntax/content issues.
  - Fail: No default export, uses named/CommonJS exports, or examples fail at runtime.

### Level 07 — Updating Properties

- Estimated minutes: 4
- Difficulty: 2
- Type: practice
- Tests required: true
- Objective: Update existing property values and explain mutability implications.
- Activities: `obj.age = obj.age + 1; obj.score = 100;` (demonstrate updating primitive and object-valued properties using dot notation).
- Rubric:
  - Pass: Updates values correctly and provides the updated result via a default-exported value/file using valid ESM syntax; explains how updates affect references.
  - Partial: Updates present but default export or explanation incomplete.
  - Fail: No default export, uses named/CommonJS exports, or updates are incorrect.

### Level 08 — Nested Properties

- Estimated minutes: 5
- Difficulty: 3
- Type: guided
- Tests required: true
- Objective: Work with nested object properties: declare nested objects, read/write nested values, and safely check existence before access.
- Activities: `const settings = { theme: { color: 'blue' } };` then access `settings.theme.color`; provide the nested object via a default export for tests.
- Rubric:
  - Pass: Provides a default-exported object containing nested properties accessible as described; ESM syntax valid.
  - Partial: Object present but nested keys missing or export has minor issues.
  - Fail: No default export, uses named/CommonJS exports, or nested structure incorrect.

### Level 09 — Methods: Declare Functions Then Assign

- Estimated minutes: 7
- Difficulty: 3
- Type: guided
- Tests required: true
- Objective: Define named functions and assign them as object methods after declaration (no anonymous/arrow functions).
- Activities: Write functions first, then assign:
  - Example:
    - function greet(name) { return "Hi " + name; }
    - const user = { name: "Ava" };
    - user.greet = greet;
    - user.greet(user.name) // "Hi Ava"
- Rubric:
  - Pass: Declares named function(s), assigns them as object methods, and provides a default-exported object value where the method reference points to the named function; ESM syntax must be valid.
  - Partial: Method assigned but default export has minor issues or signature mismatches.
  - Fail: Uses anonymous/arrow functions, missing default export, or method fails at runtime.

### Level 10 — Debugging Object Errors (Common Pitfalls)

- Estimated minutes: 7
- Difficulty: 3
- Type: practice
- Tests required: true
- Objective: Diagnose and fix broken code involving `undefined` properties, typos in keys, and incorrect method assignment.
- Activities: Given broken examples, find the bug and fix (e.g., misspelled property, accessing nested property without existence check, incorrect method assignment pattern).
- Example problems:
- Fix `person.nmae` typo.
- Ensure `settings.theme` exists before accessing `settings.theme.color`.
- Include a problem where a function is declared, but not named. The student should name it to fix the problem. Then assign the newly named function to an object (for example `user.say = say`).
- Rubric:
  - Pass: Provides a name for a function that was declared without a name and correctly assigns it to the object; supplies a default-exported value/file reflecting the fixes.
  - Partial: Refactors some issues but default export incomplete.
  - Fail: Leaves anonymous/arrow functions, missing default export, fixes absent, or changes introduce regressions.

### Level 11 — Challenge: Build Objects from Descriptions

- Estimated minutes: 7
- Difficulty: 4
- Type: challenge
- Tests required: true
- Objective: Given written specifications, declare objects with correct properties and methods (methods must be assigned from named functions).
- Example spec:
  - "Create a `book` object with `title`, `author`, `pages`, and a `summary()` method that returns ${title} by ${author}."
  - Steps: declare named `summary` function, build `book` object, then `book.summary = summary;`.
- Rubric:
  - Pass: Default-exported object matches the specification and methods (assigned from named functions) return correct values; ESM export syntax valid.
  - Partial: Object mostly matches spec but has missing fields or minor method issues.
  - Fail: No default export, object doesn't meet spec, or uses disallowed function types.

## Assessment & Testing Notes

- Tests should be fast (Vitest + Node/JSDOM if needed). Prefer assertions that:
  - Check property existence and values (`expect(obj.title).toBe("...")`).
  - Verify method references and return values (`expect(typeof obj.method).toBe("function")`, `expect(obj.method()).toBe("...")`).
  - Confirm property access via dot notation (e.g., `obj.key`).
  - Confirm default-exported value is the expected shape when imported.
  - For levels that expect multiple files (Level 01 and Level 02), tests should import each file's default export separately.
  - For methods, tests should ensure methods are assigned from named functions (e.g., compare `obj.method` to the declared function reference when possible).
  - Each `tests_required: true` level should map to one or more test file placeholders. Examples:
    - `.engine/tests/lesson-04-level-01-description.test.ts` (imports `level-01/description.js`)
    - `.engine/tests/lesson-04-level-01-examples.test.ts` (imports `level-01/examples.js`)
    - `.engine/tests/lesson-04-level-02-explanation.test.ts` (imports `level-02/explanation.js`)
    - `.engine/tests/lesson-04-level-02-examples.test.ts` (imports `level-02/examples.js`)
    - `.engine/tests/lesson-04-level-03-object.test.ts` (imports `level-03/object.js`)
    - `.engine/tests/lesson-04-level-08-nested.test.ts` (imports `level-08/nested.js`)
    - `.engine/tests/lesson-04-level-04-declare.test.ts` (imports `level-04/example.js`)
    - `.engine/tests/lesson-04-level-05-access.test.ts` (imports `level-05/access.js`)
    - `.engine/tests/lesson-04-level-06-add.test.ts` (imports `level-06/add.js`)
    - `.engine/tests/lesson-04-level-07-update.test.ts` (imports `level-07/update.js`)
    - `.engine/tests/lesson-04-level-09-methods.test.ts` (imports `level-09/object.js`)
    - `.engine/tests/lesson-04-level-10-debug.test.ts` (imports `level-10/fixes.js`)
    - `.engine/tests/lesson-04-level-11-challenge.test.ts` (imports `level-11/object.js`)

## Instructor Notes & Extensions

- Emphasize avoiding anonymous and arrow functions for methods in this lesson; reserve arrow functions for cases where `this` binding is intentionally lexical (discuss later).
- Optional deeper topics: prototype basics, Object.create, getters/setters, immutability patterns (`Object.freeze`), and class-based syntax.
- For CI/test generation: use ESM default exports across the lesson. Tests should import the default export (`import student from '...').

---

Instructor-review draft. If you'd like, I can now:

- produce a `lesson-plan.yaml` and `lesson-04-manifest.json` generation spec, or
- create the `.engine/tests/` test file placeholders for each tests-required level. Which should I do next?
