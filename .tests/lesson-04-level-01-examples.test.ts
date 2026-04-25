import { describe, it, expect } from "vitest";
import examples from "../../lesson-04-js-objects/level-01/examples.js";

describe("lesson-04 — level-01 examples", () => {
  it("exports an array", () => {
    expect(Array.isArray(examples)).toBeTruthy();
  });

  it("contains at least two strings", () => {
    expect(examples.length).toBeGreaterThanOrEqual(2);
    expect(typeof examples[0]).toBe("string");
  });
});
