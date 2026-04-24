import { describe, it } from "vitest";
import challenge from "../../lesson-04-js-objects/level-11/object.js";

describe("lesson-04 — level-11 challenge", () => {
  it("exports an object matching the written spec (has title and author)", () => {
    if (!challenge || typeof challenge !== "object") {
      throw new Error(
        "Helpful Hint: Level 11 should default-export an object matching the spec (e.g., { title, author, pages, summary: fn }).",
      );
    }

    if (
      typeof challenge.title !== "string" ||
      typeof challenge.author !== "string"
    ) {
      throw new Error(
        "Helpful Hint: The exported object should include `title` and `author` as strings.",
      );
    }

    if (typeof challenge.pages !== "number") {
      throw new Error(
        "Helpful Hint: The exported object should include `pages` as a number.",
      );
    }

    if (typeof challenge.summary !== "function") {
      throw new Error(
        "Helpful Hint: The exported object should have a `summary` method assigned from a named function.",
      );
    }

    if (!challenge.summary.name || challenge.summary.name.length === 0) {
      throw new Error(
        "Helpful Hint: The `summary` method should be a named function (not anonymous).",
      );
    }
  });
});
