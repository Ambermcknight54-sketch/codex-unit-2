import { describe, it } from "vitest";
import student from "../../lesson-04-js-objects/level-01/description.js";

describe("lesson-04 — level-01 description", () => {
  it("exports a non-empty string (default export)", () => {
    if (typeof student !== "string" || student.trim().length === 0) {
      throw new Error(
        "Helpful Hint: Level 01 should default-export a short non-empty string description.",
      );
    }
  });
});
