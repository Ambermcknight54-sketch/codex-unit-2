import { describe, it, expect } from "vitest";
import example from "../../lesson-04-js-objects/level-04/example.js";

describe("lesson-04 — level-04 declare literal", () => {
  it("exports a non-array object", () => {
    expect(example).toBeDefined();
    expect(typeof example).toBe("object");
    expect(Array.isArray(example)).toBeFalsy();
  });
});
