import { describe, it } from "vitest";
import nested from "../../lesson-04-js-objects/level-08/nested.js";

describe("lesson-04 — level-08 nested properties", () => {
  it("exports an object with nested properties accessible by dot-notation", () => {
    if (nested === null || typeof nested !== "object") {
      throw new Error(
        'Helpful Hint: Level 08 should default-export a nested object (e.g., { theme: { color: "blue" } }).',
      );
    }

    if (!nested.theme || typeof nested.theme.color === "undefined") {
      throw new Error(
        'Helpful Hint: Level 08 should include `theme.color` (for example `{ theme: { color: "blue" } }`).',
      );
    }
  });
});
