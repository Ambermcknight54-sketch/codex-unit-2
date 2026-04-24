import { describe, it } from "vitest";
import examples from "../../lesson-04-js-objects/level-02/examples.js";

describe("lesson-04 — level-02 examples", () => {
  it("exports an array of two explanatory strings", () => {
    if (
      !Array.isArray(examples) ||
      examples.length < 2 ||
      typeof examples[0] !== "string"
    ) {
      throw new Error(
        "Helpful Hint: Level 02 examples should default-export an array of two strings contrasting objects with primitives and arrays.",
      );
    }
  });
});
