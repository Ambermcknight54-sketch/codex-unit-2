import { describe, it } from "vitest";
import examples from "../../lesson-04-js-objects/level-01/examples.js";

describe("lesson-04 — level-01 examples", () => {
  it("exports an array of two example strings", () => {
    if (
      !Array.isArray(examples) ||
      examples.length < 2 ||
      typeof examples[0] !== "string"
    ) {
      throw new Error(
        "Helpful Hint: Level 01 examples should default-export an array of two strings (short examples).",
      );
    }
  });
});
