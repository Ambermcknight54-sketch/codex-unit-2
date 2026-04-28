import { describe, it, expect } from "vitest";
import examples from "../lesson-04-js-objects/level-01/examples.js";
import { expectArray, expectNonEmptyString } from "./_test-utils";

describe("lesson-04 — level-01 examples", () => {
  it("exports an array", () => {
    expectArray(examples);
  });

  it("contains at least two strings", () => {
    expect(examples.length).toBeGreaterThanOrEqual(2);
    expectNonEmptyString(examples[0]);
  });
});
