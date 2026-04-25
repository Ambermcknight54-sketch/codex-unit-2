import { describe, it, expect } from "vitest";
import explanation from "../../lesson-04-js-objects/level-02/explanation.js";

describe("lesson-04 — level-02 explanation", () => {
  it("exports a string", () => {
    expect(typeof explanation).toBe("string");
  });

  it("mentions 'key' and 'value'", () => {
    expect(/key/.test(explanation)).toBeTruthy();
    expect(/value/.test(explanation)).toBeTruthy();
  });
});
