import { describe, it, expect } from "vitest";
import answer from "../../lesson-05-terminal-commands/level-06/answer.js";

describe("lesson-05 — level-06 run node", () => {
  it("exports a string that mentions node", () => {
    expect(typeof answer).toBe("string");
    expect(/\bnode\b/i.test(String(answer))).toBeTruthy();
  });
});
