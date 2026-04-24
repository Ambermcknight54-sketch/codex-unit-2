import { describe, it } from "vitest";
import explanation from "../../lesson-04-js-objects/level-02/explanation.js";

describe("lesson-04 — level-02 explanation", () => {
  it("exports an explanation string mentioning key and value", () => {
    if (
      typeof explanation !== "string" ||
      !/key/.test(explanation) ||
      !/value/.test(explanation)
    ) {
      throw new Error(
        'Helpful Hint: Level 02 explanation should default-export a string that mentions "key" and "value" and explains objects briefly.',
      );
    }
  });
});
