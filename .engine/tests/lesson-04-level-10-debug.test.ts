import { describe, it } from "vitest";
import fixes from "../../lesson-04-js-objects/level-10/fixes.js";

describe("lesson-04 — level-10 debugging fixes", () => {
  it("exports an object with a named `say` method that returns the greeting", () => {
    if (!fixes || typeof fixes !== "object") {
      throw new Error(
        "Helpful Hint: Level 10 should default-export an object after fixes are applied.",
      );
    }

    const fn = fixes.say;
    if (typeof fn !== "function") {
      throw new Error(
        "Helpful Hint: After fixing, the object should have a `say` property that is a function (assigned from a named function).",
      );
    }

    if (!fn.name || fn.name !== "say") {
      throw new Error(
        "Helpful Hint: Name the function `say` before assigning it (e.g., `function say() { ... }`).",
      );
    }

    const result = fn();
    if (typeof result !== "string" || !/hello/i.test(result)) {
      throw new Error(
        "Helpful Hint: The `say` method should return a greeting string (for example: 'hello Ava').",
      );
    }
  });
});
