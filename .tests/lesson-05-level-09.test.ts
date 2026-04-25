import { describe, it, expect } from "vitest";
import answer from "../../lesson-05-terminal-commands/level-09/answer.js";

describe("lesson-05 — level-09 multi-step object", () => {
  it("exports an object with a steps array", () => {
    expect(typeof answer).toBe("object");
    expect(Array.isArray(answer.steps)).toBeTruthy();
  });

  it("steps include ls, cd, and node at least once (case-insensitive)", () => {
    const steps = answer.steps.map(String);
    const has = (token) => steps.some((s) => new RegExp(token, "i").test(s));
    expect(has("\\bls\\b")).toBeTruthy();
    expect(has("\\bcd\\b")).toBeTruthy();
    expect(has("\\bnode\\b")).toBeTruthy();
  });
});
