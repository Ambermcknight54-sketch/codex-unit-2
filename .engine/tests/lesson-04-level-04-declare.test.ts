import { describe, it } from "vitest";
import example from "../../lesson-04-js-objects/level-04/example.js";

describe("lesson-04 — level-04 declare literal", () => {
  it("exports an object literal", () => {
    if (
      example === null ||
      typeof example !== "object" ||
      Array.isArray(example)
    ) {
      throw new Error(
        'Helpful Hint: Level 04 should default-export an object literal (e.g., { a: 1, b: "x" }).',
      );
    }
  });
});
