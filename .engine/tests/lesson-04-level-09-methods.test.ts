import { describe, it } from "vitest";
import studentObj from "../../lesson-04-js-objects/level-09/object.js";

describe("lesson-04 — level-09 methods assigned after declaration", () => {
  it("exports an object whose method is a function (assigned from a named function)", () => {
    if (!studentObj || typeof studentObj !== "object") {
      throw new Error(
        "Helpful Hint: Level 09 should default-export an object with a method assigned from a named function (e.g., user.greet = greet).",
      );
    }

    const fn = studentObj.greet;
    if (typeof fn !== "function") {
      throw new Error(
        "Helpful Hint: Level 09 should default-export an object with a `greet` property that is a function.",
      );
    }

    if (!fn.name || fn.name.length === 0) {
      throw new Error(
        "Helpful Hint: Assign a named function as the method (the function should have a name, not be anonymous).",
      );
    }
  });
});
